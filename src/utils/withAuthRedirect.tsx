import React, { useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const withAuthRedirect = <P extends object>(WrappedComponent: ComponentType<P>, redirectTo: string = "/") => {
  const AuthRedirect: React.FC<P> = (props) => {
    const router = useRouter();

    const isAuthenticated = useSelector((state: RootState) => state.principal.isAuthenticated);

    useEffect(() => {
      if (isAuthenticated) {
        router.push(redirectTo); // Redirect if authenticated
      }
    }, [isAuthenticated, router]);

    return <WrappedComponent {...props} />;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
