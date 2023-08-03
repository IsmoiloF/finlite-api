import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { ApplicantService } from 'src/applicant/applicant.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: ApplicantService,
    private jwtService: JwtService
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.signIn(username);
    if (user?.phone_number !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name, course_id:user.course_id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}