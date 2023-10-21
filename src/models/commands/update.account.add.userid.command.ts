export class UpdateAccountAddUserIdCommand {
  constructor(
    public accountId: number,
    public userId: number,
  ) {}
}
