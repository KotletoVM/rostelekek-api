import { Module } from '@nestjs/common';
import { WorkActService } from './work-act.service';
import { WorkActController } from './work-act.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkAct } from "./entities/work-act.entity";

@Module({
  imports: [TypeOrmModule.forFeature([WorkAct])],
  controllers: [WorkActController],
  providers: [WorkActService]
})
export class WorkActModule {}
