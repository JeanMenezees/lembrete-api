import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/dominio/entidades/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
  ) {}

  public async obterPorEmail(email: string) {
    return this.usuarioRepository.findOneBy({
      email: email,
    });
  }
}
