import axios from "axios";
import { configService } from "@/services/config";
import authService from "@/services/auth";
import { persistor } from "@/redux/store";

const INVALID_TOKEN_MESSAGE = "invalid_token";
const EXPIRED_TOKEN_MESSAGE = "expired_token";

const excludedAuthenticationTokenRoutes = ["/auth/login", "/auth/register", "/auth/refresh-token"];

const apiService = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL
  baseURL: "http://localhost:8080/api",
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
apiService.interceptors.request.use(async (config) => {
  // Skip adding the Authorization header
  if (excludedAuthenticationTokenRoutes.some((route) => config.url?.includes(route))) {
    return config;
  }

  config.headers.Authorization = `Bearer ${configService.getAccessToken()}`;

  return config;
});

/**
 * Call /refresh-token to get new Access Token if there is a response with 'expired_token' error message
 */

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle errors globally
    if (error.response?.status === 401 && error.response.data.error == INVALID_TOKEN_MESSAGE) {
      configService.clearAccessTokenAndRefreshToken();

      window.location.href = "/login";
      persistor.purge();

      console.error("Unauthorized. Redirecting to login...");
    }

    if (error.response?.status === 401 && error.response.data.error === EXPIRED_TOKEN_MESSAGE) {
      const refreshToken = configService.getRefreshToken();
      const isRefreshTokenExpired = configService.isTokenExpired(refreshToken);

      if (!refreshToken || isRefreshTokenExpired) {
        configService.clearAccessTokenAndRefreshToken();

        window.location.href = "/login";
        persistor.purge();
      }

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // Get a new access token
          await authService.refreshAccessToken();

          console.log(configService.getAccessToken());

          const accessToken = configService.getAccessToken();

          // Process the queued requests with the new token
          processQueue(null, accessToken);

          // Retry the original request with the new token
          const isExcluded = excludedAuthenticationTokenRoutes.some((route) => originalRequest.url.includes(route));
          if (!isExcluded) {
            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          }

          return apiService(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);

          // Redirect to login if refreshing the token fails
          console.error("Refresh token failed. Redirecting to login...");

          configService.clearAccessTokenAndRefreshToken();

          window.location.href = "/login"; // Adjust the login path
          persistor.purge();

          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // Queue failed requests while the token is being refreshed
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      });
    }

    return Promise.reject(error);
  }
);

export default apiService;
