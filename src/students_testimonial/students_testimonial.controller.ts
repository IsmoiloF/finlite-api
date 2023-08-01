import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsTestimonialService } from './students_testimonial.service';
import { CreateStudentsTestimonialDto } from './dto/create-students_testimonial.dto';

@Controller('students-testimonial')
export class StudentsTestimonialController {
  constructor(private readonly studentsTestimonialService: StudentsTestimonialService) {}

  @Post()
  create(@Body() createStudentsTestimonialDto: CreateStudentsTestimonialDto) {
    return this.studentsTestimonialService.create(createStudentsTestimonialDto);
  }

  @Get()
  findAll() {
    return this.studentsTestimonialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsTestimonialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsTestimonialDto: CreateStudentsTestimonialDto) {
    return this.studentsTestimonialService.update(+id, updateStudentsTestimonialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsTestimonialService.remove(+id);
  }
}
