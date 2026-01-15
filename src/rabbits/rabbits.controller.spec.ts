import { Test, TestingModule } from '@nestjs/testing';
import { RabbitsController } from './rabbits.controller';
import { RabbitsService } from './rabbits.service';

describe('RabbitsController', () => {
  let controller: RabbitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RabbitsController],
      providers: [RabbitsService],
    }).compile();

    controller = module.get<RabbitsController>(RabbitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
