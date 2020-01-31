import { Test, TestingModule } from '@nestjs/testing';
import { BasesMysqlService } from './bases-mysql.service';

describe('BasesMysqlService', () => {
  let service: BasesMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasesMysqlService],
    }).compile();

    service = module.get<BasesMysqlService>(BasesMysqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
