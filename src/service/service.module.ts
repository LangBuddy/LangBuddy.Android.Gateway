import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { HttpService } from './http/http.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateAccountCommandHandler } from './auth/commands/create.account.command.handler';
import { CreateUserCommandHandler } from './auth/commands/create.user.command.handler';
import { UpdateAccountAddUserIdHandler } from './auth/commands/update.account.add.userid.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    AuthService,
    HttpService,
    CreateAccountCommandHandler,
    CreateUserCommandHandler,
    UpdateAccountAddUserIdHandler,
  ],
  exports: [AuthService],
})
export class ServiceModule {}
