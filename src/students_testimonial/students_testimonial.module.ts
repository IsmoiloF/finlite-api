import { Module } from '@nestjs/common';
import { StudentsTestimonialService } from './students_testimonial.service';
import { StudentsTestimonialController } from './students_testimonial.controller';
import { StudentsTestimonial } from './entities/students_testimonial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([StudentsTestimonial])],

  controllers: [StudentsTestimonialController],
  providers: [StudentsTestimonialService]
})
export class StudentsTestimonialModule {}
