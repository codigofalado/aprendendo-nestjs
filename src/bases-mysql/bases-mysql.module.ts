import { Module } from "@nestjs/common";
import { BasesMysqlController } from "./bases-mysql.controller";
import { TypeOrmModule, getRepositoryToken } from "@nestjs/typeorm";
import { BasesMysqlService } from "./bases-mysql.service";
import { MonkeyRepository } from "./monkey.repository";

@Module({
  imports: [TypeOrmModule.forFeature([MonkeyRepository])],
  controllers: [BasesMysqlController],
  providers: [BasesMysqlService],
})
export class BasesMysqlModule {}
