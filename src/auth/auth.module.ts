import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { ApplicantModule } from 'src/applicant/applicant.module';
import { ApplicantService } from 'src/applicant/applicant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from 'src/applicant/entities/applicant.entity';

@Module({
  imports: [
    ApplicantModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Applicant])
  ],
  providers: [AuthService,ApplicantService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}