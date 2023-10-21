import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosError } from 'axios';
import { AuthenticationCommand } from 'src/models/commands/authentication.command';
import { AuthenticationResponse } from 'src/models/responses/authentication.response';
import { HttpResponse } from 'src/models/responses/http.response';
import { HttpService } from 'src/service/http/http.service';

@CommandHandler(AuthenticationCommand)
export class AuthenticationHandler
  implements ICommandHandler<AuthenticationCommand>
{
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async execute(
    command: AuthenticationCommand,
  ): Promise<AuthenticationResponse> {
    try {
      const res = await this.httpService.post<
        HttpResponse<AuthenticationResponse>
      >(`${this.config.get('API_AUTH')}login`, command);

      return res.data;
    } catch (e) {
      console.log('error', e);
      throw new Error((e as AxiosError<HttpResponse>).response.data.message);
    }
  }
}
