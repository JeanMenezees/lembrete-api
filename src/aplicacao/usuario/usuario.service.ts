import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriarUsuarioDto } from 'src/api/usuario/dto/criar-usuario.dto';
import { Usuario } from 'src/dominio/entidades/usuario.entity';
import { Repository } from 'typeorm';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    private bcryptService: BcryptService,
  ) {}

  public async obterPorEmail(email: string) {
    return this.usuarioRepository.findOneBy({
      email: email,
    });
  }

  public async criarUsuario(criarUsuarioDto: CriarUsuarioDto) {
    const hashPassword: string = await this.bcryptService.aplicarBcryptEmSenha(
      criarUsuarioDto.senha,
    );

    const usuarioComSenhaHash: CriarUsuarioDto = {
      email: criarUsuarioDto.email,
      senha: hashPassword,
    };

    this.usuarioRepository.save(usuarioComSenhaHash);
  }
}
