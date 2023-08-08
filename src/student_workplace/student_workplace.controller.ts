import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentWorkplaceService } from './student_workplace.service';
import { CreateStudentWorkplaceDto } from './dto/create-student_workplace.dto';
import { UpdateStudentWorkplaceDto } from './dto/update-student_workplace.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Student workplace')
@Controller('student-workplace')
export class StudentWorkplaceController {
  constructor(private readonly studentWorkplaceService: StudentWorkplaceService) {}

  @ApiOperation({ summary: 'srudent ish joyini qoshish' })
  @Post()
  create(@Body() createStudentWorkplaceDto: CreateStudentWorkplaceDto) {
    return this.studentWorkplaceService.create(createStudentWorkplaceDto);
  }

  @ApiOperation({ summary: 'srudent ish joyini olish' })
  @Get()
  findAll() {
    return this.studentWorkplaceService.findAll();
  }

  @ApiOperation({ summary: 'srudent ish joyini olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentWorkplaceService.findOne(+id);
  }

  @ApiOperation({ summary: 'srudent ish joyini taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentWorkplaceDto: CreateStudentWorkplaceDto) {
    return this.studentWorkplaceService.update(+id, updateStudentWorkplaceDto);
  }

  @ApiOperation({ summary: 'srudent ish joyini ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentWorkplaceService.remove(+id);
  }
}
