import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { HttpService } from './http/http.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [AuthService, HttpService],
  exports: [AuthService],
})
export class ServiceModule {}
