import { Module } from '@nestjs/common';
import { WorkActService } from './work-act.service';
import { WorkActController } from './work-act.controller';

@Module({
  controllers: [WorkActController],
  providers: [WorkActService]
})
export class WorkActModule {}
