import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/auth.dto';
@ApiTags('Auth')
@ApiBearerAuth()

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
  @ApiOperation({summary:"Login qilish"})
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: CreateAuthDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }