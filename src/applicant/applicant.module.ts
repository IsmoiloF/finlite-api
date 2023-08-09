import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { CourseService } from '../course/course.service'; // Adjust the path accordingly
import { CourseController } from '../course/course.controller'; // Adjust the path accordingly
import { Course } from 'src/course/entities/course.entity';  // Adjust the path accordingly

@Module({
  imports: [
    TypeOrmModule.forFeature([Applicant, Course]),
    // You might have other modules imported here
  ],
  controllers: [ApplicantController, CourseController],
  providers: [ApplicantService, CourseService],
  exports: [ApplicantService], // If needed
})
export class ApplicantModule {}
