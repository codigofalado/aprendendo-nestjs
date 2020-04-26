import { Test, TestingModule } from '@nestjs/testing';
import { BasesMongodbService } from './bases-mongodb.service';

describe('BasesMongodbService', () => {
  let service: BasesMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasesMongodbService],
    }).compile();

    service = module.get<BasesMongodbService>(BasesMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
