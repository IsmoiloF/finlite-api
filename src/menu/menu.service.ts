import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';



import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private MRepository: Repository<Menu>,
  ){}
  async create(createMto: CreateMenuDto):Promise<Menu> {
    const newCart = await this.MRepository.create(createMto)
    await this.MRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<Menu[]> {
    return await this.MRepository.find();
  }

  async findOne(id: number):Promise<Menu>{
    return await this.MRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateMenuDto) {
    const newuser = await this.MRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.MRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.MRepository.delete(id);
  }
}
