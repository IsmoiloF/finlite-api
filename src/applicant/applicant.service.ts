import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applicant } from './entities/applicant.entity';
import {tg} from '../common/tg.config'
import { Course } from 'src/course/entities/course.entity';
import { log } from 'console';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private applicantRepository: Repository<Applicant>,
    @InjectRepository(Course)
    private courseRepasitory: Repository<Course>
  ) {}
  async create(createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const newCart = await this.applicantRepository.create(createApplicantDto);
    await this.applicantRepository.save(newCart);
    const course = await this.courseRepasitory.findOneBy({id: newCart.course_id})
    if(!course){
      throw new HttpException(`Course with id ${newCart.course_id} not found`, HttpStatus.NOT_FOUND)
    }
    tg.sendMessage(
      `Full Name: ${newCart.name} 
        Phone: ${newCart.phone_number}
        Course: ${course.name_uz}`,
      'info',
    );
  return newCart;

  }

  async findAll(): Promise<Applicant[]> {
    return await this.applicantRepository.find();
  }

  async findOne(id: number): Promise<Applicant> {
    return await this.applicantRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateApplicantDto) {
    const newuser = await this.applicantRepository.findOne({ where: { id } });
    Object.assign(newuser, dto);
    await this.applicantRepository.save(newuser);
    return await newuser;
  }

  async remove(id: number) {
    await this.applicantRepository.delete(id);
  }

}
