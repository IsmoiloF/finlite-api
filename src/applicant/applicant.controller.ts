import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Applicant')
@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @ApiOperation({summary:"Aplicantlarlarni qoshish"})
  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @ApiOperation({summary:"Applicant olish"})
  @Get()
  findAll() {
    return this.applicantService.findAll();
  }


  @ApiOperation({summary:"Applicant olish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(+id);
  }

  @ApiOperation({summary:"Applicant taxrirlash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateApplicantDto) {
    return this.applicantService.update(+id, dto);
  }

  @ApiOperation({summary:"Applicant ochirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicantService.remove(+id);
  }
}
