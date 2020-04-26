import { Test, TestingModule } from '@nestjs/testing';
import { BasesMongodbController } from './bases-mongodb.controller';

describe('BasesMongodb Controller', () => {
  let controller: BasesMongodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasesMongodbController],
    }).compile();

    controller = module.get<BasesMongodbController>(BasesMongodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
