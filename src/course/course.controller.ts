import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiOperation({summary:"Course qoshish"})
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @ApiOperation({summary:"Course olish"})
  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @ApiOperation({summary:"Course olish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @ApiOperation({summary:"Course taxrirlash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateCourseDto) {
    return this.courseService.update(+id, dto);
  }

  @ApiOperation({summary:"Course ochirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
