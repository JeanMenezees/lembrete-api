import { Test, TestingModule } from '@nestjs/testing';
import { LembreteController } from './lembrete.controller';

describe('LembreteController', () => {
  let controller: LembreteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LembreteController],
    }).compile();

    controller = module.get<LembreteController>(LembreteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
