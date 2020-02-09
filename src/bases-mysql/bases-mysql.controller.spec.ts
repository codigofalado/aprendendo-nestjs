import { Test, TestingModule } from "@nestjs/testing";
import { BasesMysqlController } from "./bases-mysql.controller";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Monkey } from "./monkey.entity";
import { BasesMysqlService } from "./bases-mysql.service";
import { MonkeyRepository } from "./monkey.repository";

describe("BasesMysql Controller", () => {
  let controller: BasesMysqlController;
  const result = [
    {
      id: 1,
      name: "teste",
      description: "Espionado",
      emoji: "",
      status: false
    },
    {
      id: 2,
      name: "teste 2",
      description: "Muito Fake, bicho",
      emoji: "",
      status: true
    }
  ];
  let service = { find: () => result, findOne: num => result[num] };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasesMysqlController],
      providers: [
        BasesMysqlService,
        {
          provide: getRepositoryToken(Monkey),
          useClass: MonkeyRepository
        }
      ]
    })
      .overrideProvider(MonkeyRepository)
      .useValue(service)
      .compile();
    controller = await module.resolve(BasesMysqlController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("Should return all monkeys", async () => {
    expect(await controller.findAll()).toHaveProperty("macacos");
  });

  it("Should return the first monkey", async () => {
    expect(await controller.findOne(1)).toMatchObject({ macaco: result[1] });
  });

  it("Should return monkey not found", async () => {
    await expect(controller.findOne(4)).rejects.toThrow();
  });
});
