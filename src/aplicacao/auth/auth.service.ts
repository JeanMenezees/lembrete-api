import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/dominio/entidades/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  public async validarUsuario(
    email: string,
    senha: string,
  ): Promise<{ id: number; email: string } | null> {
    const usuario = await this.usuarioService.obterPorEmail(email);

    //TODO: usar bcrypt
    if (usuario && usuario.senha === senha) {
      const { senha, ...result } = usuario;
      return result;
    }

    return null;
  }

  public async login(usuario: { id: number; email: string }) {
    const payload = { username: usuario.email, sub: usuario.id };

    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
