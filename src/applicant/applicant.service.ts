import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applicant } from './entities/applicant.entity';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private applicantRepository: Repository<Applicant>,
  ) {}
  async create(createApplicantDto: CreateApplicantDto): Promise<Applicant> {
    const newCart = await this.applicantRepository.create(createApplicantDto);
    await this.applicantRepository.save(newCart);
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

  async signIn(name: string): Promise<Applicant> {
    return this.applicantRepository.findOne(({where:{name}}));
  }
}
