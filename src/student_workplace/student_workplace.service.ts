import { Injectable } from '@nestjs/common';
import { CreateStudentWorkplaceDto } from './dto/create-student_workplace.dto';
import { UpdateStudentWorkplaceDto } from './dto/update-student_workplace.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentWorkplace } from './entities/student_workplace.entity';

@Injectable()
export class StudentWorkplaceService {
  constructor(
    @InjectRepository(StudentWorkplace)
    private SWRepository: Repository<StudentWorkplace>,
  ){}
  async create(createSWdto: CreateStudentWorkplaceDto):Promise<StudentWorkplace> {
    const newCart = await this.SWRepository.create(createSWdto)
    await this.SWRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<StudentWorkplace[]> {
    return await this.SWRepository.find();
  }

  async findOne(id: number):Promise<StudentWorkplace>{
    return await this.SWRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateStudentWorkplaceDto) {
    const newuser = await this.SWRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.SWRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.SWRepository.delete(id);
  }
}
