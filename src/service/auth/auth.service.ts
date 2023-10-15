import { Injectable } from '@nestjs/common';
import { RegisterRequest } from 'src/models/requests/register.request';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAccountCommand } from 'src/models/commands/create.account.command';
import { CreateUserCommand } from 'src/models/commands/create.user.command';

@Injectable()
export class AuthService {
  constructor(private readonly commandBus: CommandBus) {}

  async registration(registerRequest: RegisterRequest) {
    await this.commandBus.execute(
      new CreateAccountCommand(
        registerRequest.nickname,
        registerRequest.email,
        registerRequest.password,
      ),
    );

    await this.commandBus.execute(
      new CreateUserCommand(
        registerRequest.firstName,
        registerRequest.lastName,
        registerRequest.birthday,
        registerRequest.gender,
      ),
    );
  }
}
