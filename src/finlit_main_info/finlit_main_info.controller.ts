import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinlitMainInfoService } from './finlit_main_info.service';
import { CreateFinlitMainInfoDto } from './dto/create-finlit_main_info.dto';
import { UpdateFinlitMainInfoDto } from './dto/update-finlit_main_info.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('finlit-main-info')
export class FinlitMainInfoController {
  constructor(private readonly finlitMainInfoService: FinlitMainInfoService) {}

  @ApiOperation({ summary: 'main info qoshish' })
  @Post()
  create(@Body() createFinlitMainInfoDto: CreateFinlitMainInfoDto) {
    return this.finlitMainInfoService.create(createFinlitMainInfoDto);
  }

  @ApiOperation({ summary: 'main info olish' })
  @Get()
  findAll() {
    return this.finlitMainInfoService.findAll();
  }

  @ApiOperation({ summary: 'main info qoshish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finlitMainInfoService.findOne(+id);
  }

  @ApiOperation({ summary: 'main info taxrisrlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateFinlitMainInfoDto) {
    return this.finlitMainInfoService.update(+id, dto);
  }

  @ApiOperation({ summary: 'main info ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finlitMainInfoService.remove(+id);
  }
}
