export interface User {
  access: string;
  refresh: string;
}

export interface LoginState {
  isLoggedIn: boolean;
  user: User;
  loading: boolean;
  error: string | null;
}