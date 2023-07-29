import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserSchema } from './UserSchema';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private usersRepository: Repository<User>,
  ){}
  async create(createUserDto: CreateUserDto) {
    const newCart = await this.usersRepository.create(createUserDto)
    console.log(newCart);
    return 'ok';
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
