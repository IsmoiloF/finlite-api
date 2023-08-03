import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsTestimonialService } from './students_testimonial.service';
import { CreateStudentsTestimonialDto } from './dto/create-students_testimonial.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('students-testimonial')
export class StudentsTestimonialController {
  constructor(private readonly studentsTestimonialService: StudentsTestimonialService) {}

  @ApiOperation({ summary: 'srudent xuloasalari qoshish' })
  @Post()
  create(@Body() createStudentsTestimonialDto: CreateStudentsTestimonialDto) {
    return this.studentsTestimonialService.create(createStudentsTestimonialDto);
  }


  @ApiOperation({ summary: 'srudent xuloasalari olish' })
  @Get()
  findAll() {
    return this.studentsTestimonialService.findAll();
  }


  @ApiOperation({ summary: 'srudent xuloasalari olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsTestimonialService.findOne(+id);
  }

  @ApiOperation({ summary: 'srudent xuloasalari taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsTestimonialDto: CreateStudentsTestimonialDto) {
    return this.studentsTestimonialService.update(+id, updateStudentsTestimonialDto);
  }

  @ApiOperation({ summary: 'srudent xuloasalari ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsTestimonialService.remove(+id);
  }
}
