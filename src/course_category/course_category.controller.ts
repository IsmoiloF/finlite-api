import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseCategoryService } from './course_category.service';
import { CreateCourseCategoryDto } from './dto/create-course_category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course_category.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('course-category')
export class CourseCategoryController {
  constructor(private readonly courseCategoryService: CourseCategoryService) {}

  @ApiOperation({ summary: 'Course Category qoshish' })
  @Post()
  create(@Body() createCourseCategoryDto: CreateCourseCategoryDto) {
    return this.courseCategoryService.create(createCourseCategoryDto);
  }

  @ApiOperation({ summary: 'Course Category olish' })
  @Get()
  findAll() {
    return this.courseCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Course Category olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Course Category taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateCourseCategoryDto) {
    return this.courseCategoryService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Course Category ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseCategoryService.remove(+id);
  }
}
