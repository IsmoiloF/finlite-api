import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('About')
@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @ApiOperation({summary:"About qoshish"})
  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @ApiOperation({summary:"Aboutlarni olish"})
  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @ApiOperation({summary:"Aboutni olish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(+id);
  }

  @ApiOperation({summary:"Aboutni taxrirlassh"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateAboutDto) {
    return this.aboutService.update(+id, dto);
  }

  @ApiOperation({summary:"Aboutni ochirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(+id);
  }
}
