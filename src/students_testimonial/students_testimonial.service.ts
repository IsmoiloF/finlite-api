import { Injectable } from '@nestjs/common';
import { CreateStudentsTestimonialDto } from './dto/create-students_testimonial.dto';
import { UpdateStudentsTestimonialDto } from './dto/update-students_testimonial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentsTestimonial } from './entities/students_testimonial.entity';

@Injectable()
export class StudentsTestimonialService {
  constructor(
    @InjectRepository(StudentsTestimonial)
    private STRepository: Repository<StudentsTestimonial>,
  ){}
  async create(createSTdto: CreateStudentsTestimonialDto):Promise<StudentsTestimonial> {
    const newCart = await this.STRepository.create(createSTdto)
    await this.STRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<StudentsTestimonial[]> {
    return await this.STRepository.find();
  }

  async findOne(id: number):Promise<StudentsTestimonial>{
    return await this.STRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateStudentsTestimonialDto) {
    const newuser = await this.STRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.STRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.STRepository.delete(id);
  }
}
