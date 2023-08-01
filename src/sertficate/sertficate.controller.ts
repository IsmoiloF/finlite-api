import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SertficateService } from './sertficate.service';
import { CreateSertficateDto } from './dto/create-sertficate.dto';
import { UpdateSertficateDto } from './dto/update-sertficate.dto';

@Controller('sertficate')
export class SertficateController {
  constructor(private readonly sertficateService: SertficateService) {}

  @Post()
  create(@Body() createSertficateDto: CreateSertficateDto) {
    return this.sertficateService.create(createSertficateDto);
  }

  @Get()
  findAll() {
    return this.sertficateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sertficateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSertficateDto: CreateSertficateDto) {
    return this.sertficateService.update(+id, updateSertficateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sertficateService.remove(+id);
  }
}
