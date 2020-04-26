import {
  Controller,
  Get,
  Render,
  NotFoundException,
  Param,
} from "@nestjs/common";

import { BasesMongodbService } from "./bases-mongodb.service";

@Controller("bases-mongodb")
export class BasesMongodbController {
  constructor(private readonly basesMongodbService: BasesMongodbService) {}
  @Get()
  @Render("bases-mongodb-all")
  async findAll() {
    return { macacos: await this.basesMongodbService.findAll() };
  }
  @Get(":id")
  @Render("bases-mongodb-one")
  async findOne(@Param("id") id: string) {
    const macaco = await this.basesMongodbService.findOne(id);
    if (!macaco) throw new NotFoundException("Macaco não encontrado!");
    return { macaco };
  }
}
