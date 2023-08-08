import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentWorkplaceDto } from './create-student_workplace.dto';

export class UpdateStudentWorkplaceDto extends PartialType(CreateStudentWorkplaceDto) {}
