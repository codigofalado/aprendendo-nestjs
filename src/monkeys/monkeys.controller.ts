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

  @Get("natal")
  // Diz se é Natal ou não
  checaNatal() {
    // Pega a data atual
    const now = Date.now();
    const date = new Date(now);
    // Verifica se o mês é igual a 11 (javascript começa do 0) e o dia é igual a 25
    if (date.getMonth() == 11 && date.getDate() == 25) {
      return "Então é Natal!!!";
    }
    return "NÃO é Natal!!!";
  }
}
