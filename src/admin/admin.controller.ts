import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({summary:"Admin qoshish"})
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({summary:"Adminlarni olish"})
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({summary:"Admini olish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({summary:"Admini ozgartirish"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateAdminDto) {
    return this.adminService.update(+id, dto);
  }

  @ApiOperation({summary:"Adminni ochirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
