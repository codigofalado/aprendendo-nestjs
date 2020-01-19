import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonkeysModule } from './monkeys/monkeys.module';

@Module({
  imports: [MonkeysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
