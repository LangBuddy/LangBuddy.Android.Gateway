import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [WebController],
  providers: [],
})
export class WebModule {}
