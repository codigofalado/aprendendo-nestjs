import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MonkeysModule } from "./monkeys/monkeys.module";
import { Monkey } from "./bases-mysql/monkey.entity";
import { Collection } from "./bases-mongodb/collection.entity";
import { BasesMysqlModule } from "./bases-mysql/bases-mysql.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection, DatabaseType } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { BasesMongodbModule } from "./bases-mongodb/bases-mongodb.module";
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Monkey],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: "MongoDBConn",
      type: "mongodb",
      url: process.env.MONGODB_URL,
      database: process.env.MONGODB_NAME,
      entities: [Collection],
      synchronize: true,
    }),
    MonkeysModule,
    BasesMysqlModule,
    BasesMongodbModule,
    CrudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
