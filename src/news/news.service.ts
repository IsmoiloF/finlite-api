import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private NRepository: Repository<News>,
  ){}
  async create(createNdto: CreateNewsDto):Promise<News> {
    const newCart = await this.NRepository.create(createNdto)
    await this.NRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<News[]> {
    return await this.NRepository.find();
  }

  async findOne(id: number):Promise<News>{
    return await this.NRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateNewsDto) {
    const newuser = await this.NRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.NRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.NRepository.delete(id);
  }
}
