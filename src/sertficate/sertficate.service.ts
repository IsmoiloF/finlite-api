import { Injectable } from '@nestjs/common';
import { CreateSertficateDto } from './dto/create-sertficate.dto';
import { UpdateSertficateDto } from './dto/update-sertficate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sertficate } from './entities/sertficate.entity';

@Injectable()
export class SertficateService {
  constructor(
    @InjectRepository(Sertficate)
    private SRepository: Repository<Sertficate>,
  ){}
  async create(createSdto: CreateSertficateDto):Promise<Sertficate> {
    const newCart = await this.SRepository.create(createSdto)
    await this.SRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<Sertficate[]> {
    return await this.SRepository.find();
  }

  async findOne(id: number):Promise<Sertficate>{
    return await this.SRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateSertficateDto) {
    const newuser = await this.SRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.SRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.SRepository.delete(id);
  }
}
