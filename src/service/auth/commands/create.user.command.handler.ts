import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosError } from 'axios';
import { CreateUserCommand } from 'src/models/commands/create.user.command';
import { CreateUserResponse } from 'src/models/responses/create.user.response';
import { HttpResponse } from 'src/models/responses/http.response';
import { HttpService } from 'src/service/http/http.service';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async execute(command: CreateUserCommand): Promise<number> {
    try {
      const res = await this.httpService.post<HttpResponse<CreateUserResponse>>(
        this.config.get('API_USERS'),
        command,
      );

      return res.data.id;
    } catch (e) {
      throw new Error((e as AxiosError<HttpResponse>).response.data.message);
    }
  }
}
