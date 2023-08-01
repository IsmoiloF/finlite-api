import { Module } from '@nestjs/common';
import { StudentWorkplaceService } from './student_workplace.service';
import { StudentWorkplaceController } from './student_workplace.controller';
import { StudentWorkplace } from './entities/student_workplace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([StudentWorkplace])],
  controllers: [StudentWorkplaceController],
  providers: [StudentWorkplaceService]
})
export class StudentWorkplaceModule {}
