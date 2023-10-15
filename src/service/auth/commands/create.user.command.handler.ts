import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/models/commands/create.user.command';
import { HttpService } from 'src/service/http/http.service';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    try {
      const { data } = await this.httpService.post(
        this.config.get('API_USERS'),
        command,
      );
      return data;
    } catch (e) {
      console.log(e);
      throw new Error((e as Error).message);
    }
  }
}
