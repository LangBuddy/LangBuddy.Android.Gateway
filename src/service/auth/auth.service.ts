import { Injectable } from '@nestjs/common';
import { RegisterRequest } from 'src/models/requests/register.request';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAccountCommand } from 'src/models/commands/create.account.command';
import { CreateUserCommand } from 'src/models/commands/create.user.command';
import { UpdateAccountAddUserIdCommand } from 'src/models/commands/update.account.add.userid.command';
import { HttpResponse } from 'src/models/responses/http.response';
import { LoginRequest } from 'src/models/requests/login.request';
import { AuthenticationCommand } from 'src/models/commands/authentication.command';

@Injectable()
export class AuthService {
  constructor(private readonly commandBus: CommandBus) {}

  async registration(registerRequest: RegisterRequest) {
    const accountId = await this.commandBus.execute(
      new CreateAccountCommand(
        registerRequest.nickname,
        registerRequest.email,
        registerRequest.password,
      ),
    );

    const userId = await this.commandBus.execute(
      new CreateUserCommand(
        registerRequest.firstName,
        registerRequest.lastName,
        registerRequest.birthday,
        registerRequest.gender,
      ),
    );

    const res = await this.commandBus.execute(
      new UpdateAccountAddUserIdCommand(accountId, userId),
    );

    return new HttpResponse(true, 'Successful registration', {
      id: res,
    });
  }

  async login(loginRequest: LoginRequest) {
    const res = await this.commandBus.execute(
      new AuthenticationCommand(loginRequest.email, loginRequest.password),
    );
    return new HttpResponse(true, 'Successful registration', res);
  }
}
