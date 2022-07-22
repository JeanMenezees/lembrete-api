import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriarUsuarioDto } from 'src/api/usuario/dto/criar-usuario.dto';
import { Usuario } from 'src/dominio/entidades/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  public async criarUsuario(criarUsuarioDto: CriarUsuarioDto) {
    const saltRounds = 10;
    const hashPassword: string = bcrypt.hashSync(
      criarUsuarioDto.senha,
      saltRounds,
    );

    const usuarioComSenhaHash: CriarUsuarioDto = {
      email: criarUsuarioDto.email,
      senha: hashPassword,
    };

    this.usuarioRepository.save(usuarioComSenhaHash);
  }
}
