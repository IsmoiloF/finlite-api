import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { About } from './entities/about.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ){}
  async create(createAboutDto: CreateAboutDto):Promise<About> {
    const newCart = await this.aboutRepository.create(createAboutDto)
    await this.aboutRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<About[]> {
    return await this.aboutRepository.find();
  }

  async findOne(id: number):Promise<About>{
    return await this.aboutRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateAboutDto) {
    const newuser = await this.aboutRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.aboutRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.aboutRepository.delete(id);
  }
}
