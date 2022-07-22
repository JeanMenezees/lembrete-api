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

  public async criarLembrete(
    idDoUsuario: number,
    criarLembreteDto: CriarLembreteDto,
  ) {
    this.lembreteRepository
      .createQueryBuilder('lembrete')
      .insert()
      .into(Lembrete)
      .values({ ...criarLembreteDto, usuario: { id: idDoUsuario } })
      .execute();
  }

  public async obterTodos(idDoUsuario: number): Promise<Lembrete[] | null> {
    return this.lembreteRepository
      .createQueryBuilder('lembrete')
      .where('lembrete.usuarioId = :usuarioId', { usuarioId: idDoUsuario })
      .getMany();
  }

  public async obterPorId(
    idDoUsuario: number,
    id: number,
  ): Promise<Lembrete | null> {
    return this.lembreteRepository
      .createQueryBuilder('lembrete')
      .where('lembrete.usuarioId = :usuarioId', { usuarioId: idDoUsuario })
      .andWhere('lembrete.id = :id', { id: id })
      .getOne();
  }

  public async atualizarLembrete(
    idDoUsuario: number,
    id: number,
    atualizarLembreteDto: AtualizarLembreteDto,
  ) {
    this.lembreteRepository
      .createQueryBuilder('lembrete')
      .update(Lembrete)
      .set(atualizarLembreteDto)
      .where('lembrete.usuarioId = :usuarioId', { usuarioId: idDoUsuario })
      .andWhere('lembrete.id = :id', { id: id })
      .execute();
  }

  public async deletarLembrete(idDoUsuario: number, id: number) {
    this.lembreteRepository
      .createQueryBuilder('lembrete')
      .delete()
      .from(Lembrete)
      .where('lembrete.usuarioId = :usuarioId', { usuarioId: idDoUsuario })
      .andWhere('lembrete.id = :id', { id: id })
      .execute();
  }
}
