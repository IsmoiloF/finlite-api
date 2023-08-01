import { PartialType } from '@nestjs/mapped-types';
import { CreateSertficateDto } from './create-sertficate.dto';

export class UpdateSertficateDto extends PartialType(CreateSertficateDto) {}
