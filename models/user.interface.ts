export interface IUserPayload {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IUserRegisterResponse {
  statusCode: number;
  message: string;
}
