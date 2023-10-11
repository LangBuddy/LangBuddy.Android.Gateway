import { Injectable } from '@nestjs/common';
import { RegisterRequest } from 'src/models/requests/register.request';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAccountCommand } from 'src/models/commands/create.account.command';

@Injectable()
export class AuthService {
  constructor(private readonly commandBus: CommandBus) {}

  async register(registerRequest: RegisterRequest) {
    const createAccountCommand: CreateAccountCommand = {
      ...registerRequest,
    };

    const result = await this.commandBus.execute(createAccountCommand);
    return result;
  }
}
