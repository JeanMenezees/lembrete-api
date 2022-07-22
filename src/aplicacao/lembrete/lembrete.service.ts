import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtualizarLembreteDto } from 'src/api/lembrete/dto/atualizar-lembrete.dto';
import { CriarLembreteDto } from 'src/api/lembrete/dto/criar-lembrete.dto';
import { Lembrete } from 'src/dominio/entidades/lembrete.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LembreteService {
  constructor(
    @InjectRepository(Lembrete)
    private lembreteRepository: Repository<Lembrete>,
  ) {}

  public async criarLembrete(criarLembreteDto: CriarLembreteDto) {
    this.lembreteRepository.save(criarLembreteDto);
  }

  public async obterTodos(): Promise<Lembrete[]> {
    return this.lembreteRepository.find();
  }

  public async obterPorId(id: { id: number }) {
    return this.lembreteRepository.findOneBy({
      id: id.id,
    });
  }

  public async atualizarLembrete(
    id: { id: number },
    atualizarLembreteDto: AtualizarLembreteDto,
  ) {
    this.lembreteRepository.update(id.id, atualizarLembreteDto);
  }

  public async deletarLembrete(id: { id: number }) {
    this.lembreteRepository.delete({ id: id.id });
  }
}
