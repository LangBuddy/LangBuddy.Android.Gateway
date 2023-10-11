import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAccountCommand } from 'src/models/commands/create.account.command';
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
      const { data } = await this.httpService.post(
        this.config.get('API_AUTH'),
        command,
      );
      return data;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }
}
