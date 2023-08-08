import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { Applicant } from './entities/applicant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Applicant])],
  controllers: [ApplicantController],
  providers: [ApplicantService]
})
export class ApplicantModule {}
