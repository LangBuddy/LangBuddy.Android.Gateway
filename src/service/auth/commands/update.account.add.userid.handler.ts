import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosError } from 'axios';
import { UpdateAccountAddUserIdCommand } from 'src/models/commands/update.account.add.userid.command';
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

  async execute(command: UpdateAccountAddUserIdCommand): Promise<any> {
    try {
      const res = await this.httpService.patch<HttpResponse>(
        `${this.config.get('API_ACCOUNTS')}${command.accountId}`,
        {
          userId: command.userId,
        },
      );

      return res.data.id;
    } catch (e) {
      throw new Error(
        (e as AxiosError<HttpResponse, HttpResponse>).response.data.message,
      );
    }
  }
}
