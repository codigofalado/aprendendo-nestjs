import { Module } from "@nestjs/common";
import { CrudController } from "./crud.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FoodRepository } from "./food.repository";
import { CrudService } from './crud.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodRepository], "MongoDBConn")],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
