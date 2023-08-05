import { HttpException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
// import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ){}
  async create(createAdminDto: CreateAdminDto):Promise<Admin> {
    const newCart = await this.adminRepository.create(createAdminDto)
    await this.adminRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<Admin[]> {
    return await this.adminRepository.find();
  }

  async findOne(id: number):Promise<Admin>{
    return await this.adminRepository.findOneBy({ id });
    const admin = await this.adminRepository.findOneBy({id})
    if(!admin){
      throw new HttpException("Admin topilmadi", 404)
    }
  }

  async update(id: number, dto: CreateAdminDto) {
    const admin = await this.adminRepository.findOneBy({id})
    if(!admin){
      throw new HttpException("Admin topilmadi", 404)
    }
    const newadmin = await this.adminRepository.findOne({where :{id}})
    Object.assign(newadmin, dto)
    await this.adminRepository.save(newadmin)
    return await newadmin;
  }

  async remove(id: number) {
    const admin = await this.adminRepository.findOneBy({id})
    if(!admin){
      throw new HttpException("Admin topilmadi", 404)
    }
    await this.adminRepository.delete(id);
  }

  async signIn(username: string): Promise<Admin> {
    return this.adminRepository.findOne(({where:{username}}));
  }



  
}
