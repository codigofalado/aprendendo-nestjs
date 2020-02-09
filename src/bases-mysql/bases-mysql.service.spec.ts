import { Test, TestingModule } from "@nestjs/testing";
import { BasesMysqlService } from "./bases-mysql.service";
import { Monkey } from "./monkey.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { MonkeyRepository } from "./monkey.repository";

describe("BasesMysqlService", () => {
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
  let baseService: BasesMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    baseService = await module.resolve(BasesMysqlService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should find all monkeys", async () => {
    expect(baseService.findAll()).toMatchObject(result);
  });

  it("should find one monkey", async () => {
    expect(baseService.findOne(1)).toMatchObject(result[1]);
  });
});
