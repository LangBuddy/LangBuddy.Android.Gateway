import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { HttpService } from './http/http.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateAccountCommandHandler } from './auth/commands/create.account.command.handler';
import { CreateUserCommandHandler } from './auth/commands/create.user.command.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    AuthService,
    HttpService,
    CreateAccountCommandHandler,
    CreateUserCommandHandler,
  ],
  exports: [AuthService],
})
export class ServiceModule {}
