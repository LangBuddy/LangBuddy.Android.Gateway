import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosError } from 'axios';
import { CreateAccountCommand } from 'src/models/commands/create.account.command';
import { HttpResponse } from 'src/models/responses/http.response';
import { HttpService } from 'src/service/http/http.service';

@CommandHandler(CreateAccountCommand)
export class CreateAccountCommandHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async execute(command: CreateAccountCommand): Promise<any> {
    try {
      const res = await this.httpService.post<HttpResponse>(
        `${this.config.get('API_AUTH')}register`,
        command,
      );

      return res.data.id;
    } catch (e) {
      console.log('error', e);
      throw new Error(
        (e as AxiosError<HttpResponse, HttpResponse>).response.data.message,
      );
    }
  }
}
