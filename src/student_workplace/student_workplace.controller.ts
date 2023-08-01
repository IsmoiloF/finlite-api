import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentWorkplaceService } from './student_workplace.service';
import { CreateStudentWorkplaceDto } from './dto/create-student_workplace.dto';
import { UpdateStudentWorkplaceDto } from './dto/update-student_workplace.dto';

@Controller('student-workplace')
export class StudentWorkplaceController {
  constructor(private readonly studentWorkplaceService: StudentWorkplaceService) {}

  @Post()
  create(@Body() createStudentWorkplaceDto: CreateStudentWorkplaceDto) {
    return this.studentWorkplaceService.create(createStudentWorkplaceDto);
  }

  @Get()
  findAll() {
    return this.studentWorkplaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentWorkplaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentWorkplaceDto: CreateStudentWorkplaceDto) {
    return this.studentWorkplaceService.update(+id, updateStudentWorkplaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentWorkplaceService.remove(+id);
  }
}
