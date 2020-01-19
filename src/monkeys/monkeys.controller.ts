import { Controller, Get, Query, Param } from "@nestjs/common";

@Controller("monkeys")
export class MonkeysController {
  @Get()
  helloMonkeys(@Query("nome") nome = "usuários"): string {
    return `<h1>Hello 🐵, ${nome}</h1>`;
  }
  // Rota para exibir o parametro da rota na tela
  @Get("code-monkey/:nome")
  meChamaDeCodeMonkey(@Param("nome") nome: string) {
    return `<h1>Você é Code Monkey, 🐵 ${nome}</h1>`;
  }
}
