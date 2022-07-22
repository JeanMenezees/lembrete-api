import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

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
    const saltRounds = 10;
    const hashPassword: string = bcrypt.hashSync(senha, saltRounds);

    const isMatchPassword = bcrypt.compare(usuario.senha, hashPassword);

    //TODO: usar bcrypt
    if (usuario && isMatchPassword) {
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
