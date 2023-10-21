import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosError } from 'axios';
import { UpdateAccountAddUserIdCommand } from 'src/models/commands/update.account.add.userid.command';
import { CreateAccountResponse } from 'src/models/responses/create.account.response';
import { HttpResponse } from 'src/models/responses/http.response';
import { HttpService } from 'src/service/http/http.service';

@CommandHandler(UpdateAccountAddUserIdCommand)
export class UpdateAccountAddUserIdHandler
  implements ICommandHandler<UpdateAccountAddUserIdCommand>
{
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async execute(command: UpdateAccountAddUserIdCommand): Promise<number> {
    try {
      const res = await this.httpService.patch<
        HttpResponse<CreateAccountResponse>
      >(`${this.config.get('API_ACCOUNTS')}${command.accountId}`, {
        userId: command.userId,
      });

      return res.data.id;
    } catch (e) {
      throw new Error((e as AxiosError<HttpResponse>).response.data.message);
    }
  }
}
