export class AuthenticationResponse {
  constructor(
    public token: string,
    public refreshToken: string,
  ) {}
}
