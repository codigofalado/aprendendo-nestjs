import { Test, TestingModule } from '@nestjs/testing';
import { BasesMysqlController } from './bases-mysql.controller';

describe('BasesMysql Controller', () => {
  let controller: BasesMysqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasesMysqlController],
    }).compile();

    controller = module.get<BasesMysqlController>(BasesMysqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
