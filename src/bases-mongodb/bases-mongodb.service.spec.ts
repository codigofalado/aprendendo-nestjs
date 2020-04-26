import { Test, TestingModule } from "@nestjs/testing";
import { BasesMongodbService } from "./bases-mongodb.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Collection } from "./collection.entity";
import { CollectionRepository } from "./collection.repository";

describe("BasesMongodbService", () => {
  const result = [
    {
      id: "5ea4dcd5ed548972d16e2653",
      name: "teste",
      description: "Espionado",
      emoji: "",
      status: false,
    },
    {
      id: "5ea4e674ed548972d16e2654",
      name: "teste 2",
      description: "Muito Fake, bicho",
      emoji: "",
      status: true,
    },
  ];
  // @ts-ignore
  const repositoryMockFactory: () => CollectionRepository<Collection> = jest.fn(
    () => ({
      find: () => result,
      findOne: (id) => result.find((result) => result.id == id),
    })
  );
  let baseService: BasesMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BasesMongodbService,
        {
          provide: getRepositoryToken(Collection, "MongoDBConn"),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    baseService = await module.resolve(BasesMongodbService);
  });

  it("should be defined", () => {
    expect(baseService).toBeDefined();
  });

  it("should find all monkeys", async () => {
    expect(baseService.findAll()).toMatchObject(result);
  });

  it("should find one monkey", async () => {
    expect(baseService.findOne("5ea4e674ed548972d16e2654")).toMatchObject(
      result[1]
    );
  });
});
