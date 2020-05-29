import {
  Controller,
  Get,
  Query,
  Render,
  Post,
  Body,
  Res,
  Param,
  NotFoundException,
  Delete,
} from "@nestjs/common";
import { CrudService } from "./crud.service";
import { CreateFoodDto } from "./create-food.dto";

@Controller("crud")
export class CrudController {
  constructor(private readonly crudService: CrudService) {}
  @Get()
  @Render("crud-list")
  async list(@Query("error") error = 0, @Query("success") success = 0) {
    let comidas = await this.crudService.findAll();
    return { error, success, comidas };
  }

  // Apenas Exibe o Form De Criação
  @Get("create")
  @Render("crud-create")
  create(@Query("error") error = 0) {
    return { error };
  }
  // Processa o Form
  @Post("create")
  async save(@Body() createFoodDto: CreateFoodDto, @Res() res) {
    if (createFoodDto.name == "" || createFoodDto.emoji == "") {
      return res.redirect("/crud/create?error=1");
    }
    let comida = await this.crudService.save(createFoodDto);
    if (comida.id) {
      // Sucesso
      return res.redirect("/crud?success=1");
    }
    // Erro
    return res.redirect("/crud?error=1");
  }
  @Get("update")
  update(): string {
    return `<h1>CRUD UPDATE Vai Aqui</h1>`;
  }
  @Get("delete/:id")
  @Render("crud-delete")
  async delete(@Param("id") id: string) {
    // 1 - Certificar-se de que a Comida foi encontrada
    let comida = await this.crudService.findOne(id);
    if (!comida) throw new NotFoundException("Comida não encontrada!");
    // 2 - Retornar um Form de Confirmação / Cancelamento
    return { comida };
  }
  @Post("delete/:id")
  async confirmDelete(@Param("id") id: string, @Res() res) {
    // 1 - Certificar-se de que a Comida foi encontrada
    let comida = await this.crudService.findOne(id);
    if (!comida) throw new NotFoundException("Comida não encontrada!");
    // 2 - Efetua a remoção
    await this.crudService.delete(comida);
    // 3 - Redireciona assumindo que o mundo é lindo
    return res.redirect("/crud?success=1");
  }
}
