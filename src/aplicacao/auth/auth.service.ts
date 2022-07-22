import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AssinaturaUsuario } from '../usuario/assinatura-usuario';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  public async validarUsuario(
    email: string,
    senha: string,
  ): Promise<AssinaturaUsuario | null> {
    const usuario = await this.usuarioService.obterPorEmail(email);
    const saltRounds = 10;
    const hashPassword: string = bcrypt.hashSync(senha, saltRounds);

    const isMatchPassword = bcrypt.compare(usuario.senha, hashPassword);

    if (usuario && isMatchPassword) {
      const { senha, ...assinatura } = usuario;
      return assinatura;
    }

    return null;
  }

  public async login(assinaturaDoUsuario: AssinaturaUsuario) {
    const payload = {
      username: assinaturaDoUsuario.email,
      sub: assinaturaDoUsuario.id,
    };

    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
