import { Injectable } from '@nestjs/common';
import { CreateLembreteDto } from './dto/create-lembrete.dto';
import { UpdateLembreteDto } from './dto/update-lembrete.dto';

@Injectable()
export class LembreteService {
  create(createLembreteDto: CreateLembreteDto) {
    return 'This action adds a new lembrete';
  }

  findAll() {
    return `This action returns all lembrete`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lembrete`;
  }

  update(id: number, updateLembreteDto: UpdateLembreteDto) {
    return `This action updates a #${id} lembrete`;
  }

  remove(id: number) {
    return `This action removes a #${id} lembrete`;
  }
}
