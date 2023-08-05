import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({ summary: 'news qoshish' })
  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @ApiOperation({ summary: 'news olish' })
  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @ApiOperation({ summary: 'news olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @ApiOperation({ summary: 'news taxrirlash' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: CreateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @ApiOperation({ summary: 'news ochirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
