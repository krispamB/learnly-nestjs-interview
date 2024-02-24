import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SignUpDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';
import * as argon from 'argon2'

@Injectable()
export class AuthService {
  constructor(private config: ConfigService, @InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(dto: SignUpDto) {
    const userExists: User = await this.userModel.findOne({email: dto.email})

    if(userExists) throw new BadRequestException(`User with credentials already exist`)

    const hash: string = await argon.hash(dto.password)

    const createdUser: User = await this.userModel.create({...dto, hash})

    return {
      message: `user created successfully`,
      data: createdUser
    }

  }

}
