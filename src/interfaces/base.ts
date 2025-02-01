interface IBaseUser {
  username: string;
  firstName: string;
  lastName: string;
  active: boolean;
  roles: string[];
  avatarUrl: string;
}

export type { IBaseUser };
