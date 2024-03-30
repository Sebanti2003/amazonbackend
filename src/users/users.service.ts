/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    const all = this.userModel.find();
    return all;
  }

  async findOne(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async remove(username: string): Promise<any> {
    const a = await this.userModel.deleteOne({ username: username });
    return a;
  }
}
