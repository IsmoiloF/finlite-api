import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';



@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ){}
  async create(createCDto: CreateCourseDto):Promise<Course> {
    const newCart = await this.courseRepository.create(createCDto)
    await this.courseRepository.save(newCart)
    return newCart;
  }

  async findAll():Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: number):Promise<Course>{
    return await this.courseRepository.findOneBy({ id });
  }

  async update(id: number, dto: CreateCourseDto) {
    const newuser = await this.courseRepository.findOne({where :{id}})
    Object.assign(newuser, dto)
    await this.courseRepository.save(newuser)
    return await newuser;
  }

  async remove(id: number) {
    await this.courseRepository.delete(id);
  }
}
