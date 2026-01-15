import { Injectable } from '@nestjs/common';
import { CreateRabbitDto } from './dto/create-rabbit.dto';
import { UpdateRabbitDto } from './dto/update-rabbit.dto';

@Injectable()
export class RabbitsService {
  create(createRabbitDto: CreateRabbitDto) {
    return 'This action adds a new rabbit';
  }

  findAll() {
    return `This action returns all rabbits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rabbit`;
  }

  update(id: number, updateRabbitDto: UpdateRabbitDto) {
    return `This action updates a #${id} rabbit`;
  }

  remove(id: number) {
    return `This action removes a #${id} rabbit`;
  }
}
