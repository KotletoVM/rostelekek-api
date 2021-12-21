import { PartialType } from '@nestjs/swagger';
import { CreateWorkActDto } from './create-work-act.dto';

export class UpdateWorkActDto extends PartialType(CreateWorkActDto) {}
