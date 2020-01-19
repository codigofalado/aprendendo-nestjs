import { Module } from '@nestjs/common';
import { MonkeysController } from './monkeys.controller';

@Module({
  controllers: [MonkeysController]
})
export class MonkeysModule {}
