import { PartialType } from '@nestjs/mapped-types';
import { CreateFinlitMainInfoDto } from './create-finlit_main_info.dto';

export class UpdateFinlitMainInfoDto extends PartialType(CreateFinlitMainInfoDto) {}
