import { Test, TestingModule } from '@nestjs/testing';
import { WorkActService } from './work-act.service';

describe('WorkActService', () => {
  let service: WorkActService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkActService],
    }).compile();

    service = module.get<WorkActService>(WorkActService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
