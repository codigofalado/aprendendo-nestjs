import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MonkeysModule } from "./monkeys/monkeys.module";
import { Monkey } from "./bases-mysql/monkey.entity";
import { BasesMysqlModule } from "./bases-mysql/bases-mysql.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection, DatabaseType } from "typeorm";
import { ConfigModule } from "@nestjs/config";

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
    MonkeysModule,
    BasesMysqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
