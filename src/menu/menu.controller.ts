import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: 'menu qoshish' })
  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @ApiOperation({ summary: 'menuni olish' })
  @Get()
  findAll() {
    return this.menuService.findAll();
  }
  
  @ApiOperation({ summary: 'menuni olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @ApiOperation({ summary: 'menu taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateMenuDto) {
    return this.menuService.update(+id, dto);
  }

  @ApiOperation({ summary: 'menu ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
