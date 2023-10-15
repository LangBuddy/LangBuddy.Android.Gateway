import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/service/service.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [ServiceModule],
  controllers: [AuthController],
  providers: [],
})
export class WebModule {}
