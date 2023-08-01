import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsTestimonialDto } from './create-students_testimonial.dto';

export class UpdateStudentsTestimonialDto extends PartialType(CreateStudentsTestimonialDto) {}
