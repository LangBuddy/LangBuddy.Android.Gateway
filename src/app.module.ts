import { Module } from '@nestjs/common';
import { WebModule } from './web/web.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WebModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
