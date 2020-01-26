import { Test, TestingModule } from "@nestjs/testing";
import { MonkeysController } from "./monkeys.controller";

describe("Monkeys Controller", () => {
  let controller: MonkeysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonkeysController]
    }).compile();

    controller = module.get<MonkeysController>(MonkeysController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("Should return Hello Monkeys", () => {
    const expected = "<h1>Hello 🐵, usuários</h1>";
    expect(controller.helloMonkeys()).toBe(expected);
    expect(controller.helloMonkeys("Fernando")).toContain("Fernando");
  });

  it("Should call me Code Monkey", () => {
    const expected = "Você é Code Monkey, 🐵 ";
    expect(controller.meChamaDeCodeMonkey("Fernando")).toContain(
      expected + "Fernando"
    );
  });

  it("Should say it's Christmas", () => {
    jest
      .spyOn(Date, "now")
      .mockReturnValueOnce(new Date("2019-12-25T11:01:58.135Z").getTime());
    expect(controller.checaNatal()).toBe("Então é Natal!!!");
  });

  it("Should say it's NOT Christmas", () => {
    jest
      .spyOn(Date, "now")
      .mockReturnValueOnce(new Date("2019-12-20T11:01:58.135Z").getTime());
    expect(controller.checaNatal()).toBe("NÃO é Natal!!!");
  });

  it("Should count my name and return monkeys", () => {
    const expected = {
      nome: "Fernando",
      chars: 8,
      monkeys: "🐵🐵🐵🐵🐵🐵🐵🐵"
    };
    expect(controller.countMonkeys("Fernando")).toEqual(expected);
  });
});
