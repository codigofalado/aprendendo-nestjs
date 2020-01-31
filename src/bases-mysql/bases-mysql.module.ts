import { Module } from "@nestjs/common";
import { BasesMysqlController } from "./bases-mysql.controller";
import { Monkey } from "./monkey.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BasesMysqlService } from './bases-mysql.service';

@Module({
  imports: [TypeOrmModule.forFeature([Monkey])],
  controllers: [BasesMysqlController],
  providers: [BasesMysqlService]
})
export class BasesMysqlModule {}
