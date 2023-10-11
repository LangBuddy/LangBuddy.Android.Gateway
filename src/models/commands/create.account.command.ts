export class CreateAccountCommand {
  constructor(
    public nickname: string,
    public email: string,
    public password: string,
  ) {}
}
