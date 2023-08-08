import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SertficateService } from './sertficate.service';
import { CreateSertficateDto } from './dto/create-sertficate.dto';
import { UpdateSertficateDto } from './dto/update-sertficate.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Sertificate')
@Controller('sertficate')
export class SertficateController {
  constructor(private readonly sertficateService: SertficateService) {}


  @ApiOperation({ summary: 'Sertficate qoshish'})
  @Post()
  create(@Body() createSertficateDto: CreateSertficateDto) {
    return this.sertficateService.create(createSertficateDto);
  }

  @ApiOperation({ summary: 'Sertficate olish' })
  @Get()
  findAll() {
    return this.sertficateService.findAll();
  }

  @ApiOperation({ summary: 'Sertficate olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sertficateService.findOne(+id);
  }

  @ApiOperation({ summary: 'Sertficate taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSertficateDto: CreateSertficateDto) {
    return this.sertficateService.update(+id, updateSertficateDto);
  }

  @ApiOperation({ summary: 'Sertficate ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sertficateService.remove(+id);
  }
}
