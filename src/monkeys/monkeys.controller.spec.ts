import { Test, TestingModule } from '@nestjs/testing';
import { MonkeysController } from './monkeys.controller';

describe('Monkeys Controller', () => {
  let controller: MonkeysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonkeysController],
    }).compile();

    controller = module.get<MonkeysController>(MonkeysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
