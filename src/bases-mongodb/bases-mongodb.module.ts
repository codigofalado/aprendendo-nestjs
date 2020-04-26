import { Module } from "@nestjs/common";
import { BasesMongodbController } from "./bases-mongodb.controller";
import { BasesMongodbService } from "./bases-mongodb.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollectionRepository } from "./collection.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CollectionRepository], "MongoDBConn")],
  controllers: [BasesMongodbController],
  providers: [BasesMongodbService],
})
export class BasesMongodbModule {}
