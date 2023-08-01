import { Injectable } from '@nestjs/common';
import { CreateCourseCategoryDto } from './dto/create-course_category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseCategory } from './entities/course_category.entity';

@Injectable()
export class CourseCategoryService {
  constructor(
    @InjectRepository(CourseCategory)
    private courseCRepository: Repository<CourseCategory>,
  ){}
  async create(createCCDto: CreateCourseCategoryDto):Promise<CourseCategory> {
    const newCart = await this.courseCRepository.create(createCCDto)
    await this.courseCRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<CourseCategory[]> {
    return await this.courseCRepository.find();
  }

  async findOne(id: number):Promise<CourseCategory>{
    return await this.courseCRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateCourseCategoryDto) {
    const newuser = await this.courseCRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.courseCRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.courseCRepository.delete(id);
  }
}
