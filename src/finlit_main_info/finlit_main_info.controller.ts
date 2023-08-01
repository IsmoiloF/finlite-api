import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinlitMainInfoService } from './finlit_main_info.service';
import { CreateFinlitMainInfoDto } from './dto/create-finlit_main_info.dto';
import { UpdateFinlitMainInfoDto } from './dto/update-finlit_main_info.dto';

@Controller('finlit-main-info')
export class FinlitMainInfoController {
  constructor(private readonly finlitMainInfoService: FinlitMainInfoService) {}

  @Post()
  create(@Body() createFinlitMainInfoDto: CreateFinlitMainInfoDto) {
    return this.finlitMainInfoService.create(createFinlitMainInfoDto);
  }

  @Get()
  findAll() {
    return this.finlitMainInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finlitMainInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateFinlitMainInfoDto) {
    return this.finlitMainInfoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finlitMainInfoService.remove(+id);
  }
}
