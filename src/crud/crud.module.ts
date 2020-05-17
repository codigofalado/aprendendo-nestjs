import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';

@Module({
  controllers: [CrudController]
})
export class CrudModule {}
