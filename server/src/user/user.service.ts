import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { RegistUserDto } from './dto/regist-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegistUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
      },
    });

    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
