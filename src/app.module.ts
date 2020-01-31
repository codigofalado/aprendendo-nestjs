import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MonkeysModule } from "./monkeys/monkeys.module";
import { Monkey } from "./bases-mysql/monkey.entity";
import { BasesMysqlModule } from "./bases-mysql/bases-mysql.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "aprendendo-nestjs",
      entities: [Monkey],
      synchronize: true
    }),
    MonkeysModule,
    BasesMysqlModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
