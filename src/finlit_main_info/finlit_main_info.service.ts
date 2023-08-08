import { Injectable } from '@nestjs/common';
import { CreateFinlitMainInfoDto } from './dto/create-finlit_main_info.dto';
import { UpdateFinlitMainInfoDto } from './dto/update-finlit_main_info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinlitMainInfo } from './entities/finlit_main_info.entity';

@Injectable()
export class FinlitMainInfoService {
  constructor(
    @InjectRepository(FinlitMainInfo)
    private mainRepository: Repository<FinlitMainInfo>,
  ){}
  async create(createFMDto: CreateFinlitMainInfoDto):Promise<FinlitMainInfo> {
    const newCart = await this.mainRepository.create(createFMDto)
    await this.mainRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<FinlitMainInfo[]> {
    return await this.mainRepository.find();
  }

  async findOne(id: number):Promise<FinlitMainInfo>{
    return await this.mainRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateFinlitMainInfoDto) {
    const newuser = await this.mainRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.mainRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.mainRepository.delete(id);
  }
}
