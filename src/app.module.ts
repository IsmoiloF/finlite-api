import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { ApplicantModule } from './applicant/applicant.module';
import { CourseModule } from './course/course.module';
import { CourseCategoryModule } from './course_category/course_category.module';
import { SertficateModule } from './sertficate/sertficate.module';
import { StudentWorkplaceModule } from './student_workplace/student_workplace.module';
import { NewsModule } from './news/news.module';
import { MenuModule } from './menu/menu.module';
import { AboutModule } from './about/about.module';
import { FinlitMainInfoModule } from './finlit_main_info/finlit_main_info.module';
import { StudentsTestimonialModule } from './students_testimonial/students_testimonial.module';
import { About } from './about/entities/about.entity';
import { Admin } from './admin/entities/admin.entity';
import { Applicant } from './applicant/entities/applicant.entity';
import { Course } from './course/entities/course.entity';
import { CourseCategory } from './course_category/entities/course_category.entity';
import { FinlitMainInfo } from './finlit_main_info/entities/finlit_main_info.entity';
import { Menu } from './menu/entities/menu.entity';
import { News } from './news/entities/news.entity';
import { Sertficate } from './sertficate/entities/sertficate.entity';
import { StudentWorkplace } from './student_workplace/entities/student_workplace.entity';
import { StudentsTestimonial } from './students_testimonial/entities/students_testimonial.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database:"finlite",
      entities: [
         About, Admin, Applicant,
         Course, CourseCategory,
         FinlitMainInfo, Menu, News, 
         Sertficate, StudentWorkplace,
         StudentsTestimonial
      ],
      synchronize:  true,
    }),
    AdminModule,
    ApplicantModule,
    CourseModule,
    CourseCategoryModule,
    SertficateModule,
    StudentWorkplaceModule,
    NewsModule,
    MenuModule,
    AboutModule,
    FinlitMainInfoModule,
    StudentsTestimonialModule
  ],
})
export class AppModule {}