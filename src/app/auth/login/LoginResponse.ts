export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  expireAt: Date;
  username: string;
}
