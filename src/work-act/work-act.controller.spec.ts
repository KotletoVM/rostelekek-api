import { Test, TestingModule } from '@nestjs/testing';
import { WorkActController } from './work-act.controller';
import { WorkActService } from './work-act.service';

describe('WorkActController', () => {
  let controller: WorkActController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkActController],
      providers: [WorkActService],
    }).compile();

    controller = module.get<WorkActController>(WorkActController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
