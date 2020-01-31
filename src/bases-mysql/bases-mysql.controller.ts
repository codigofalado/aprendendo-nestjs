import {
  Controller,
  Get,
  Render,
  Param,
  NotFoundException
} from "@nestjs/common";
import { BasesMysqlService } from "./bases-mysql.service";

@Controller("bases-mysql")
export class BasesMysqlController {
  constructor(private readonly basesMysqlService: BasesMysqlService) {}
  @Get()
  @Render("bases-mysql-all")
  async findAll() {
    return { macacos: await this.basesMysqlService.findAll() };
  }
  @Get(":id")
  @Render("bases-mysql-one")
  async findOne(@Param("id") id: number) {
    const macaco = await this.basesMysqlService.findOne(id);
    if (!macaco) throw new NotFoundException("Macaco não encontrado!");
    return { macaco };
  }
}
