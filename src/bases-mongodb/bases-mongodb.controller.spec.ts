import { Test, TestingModule } from "@nestjs/testing";
import { BasesMongodbController } from "./bases-mongodb.controller";
import { BasesMongodbService } from "./bases-mongodb.service";
import { Collection } from "./collection.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CollectionRepository } from "./collection.repository";

describe("BasesMongodb Controller", () => {
  let controller: BasesMongodbController;
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasesMongodbController],
      providers: [
        BasesMongodbService,
        {
          provide: getRepositoryToken(Collection, "MongoDBConn"),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<BasesMongodbController>(BasesMongodbController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("Should return all monkeys", async () => {
    expect(await controller.findAll()).toHaveProperty("macacos");
  });

  it("Should return the first monkey", async () => {
    expect(await controller.findOne("5ea4e674ed548972d16e2654")).toMatchObject({
      macaco: result[1],
    });
  });

  it("Should return monkey not found", async () => {
    await expect(
      controller.findOne("5ea4e674ed548972d16e2600")
    ).rejects.toThrow();
  });
});
