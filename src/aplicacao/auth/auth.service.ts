import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { AssinaturaUsuario } from '../usuario/assinatura-usuario';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcryptService: BcryptService,
  ) {}

  public async validarUsuario(
    email: string,
    senha: string,
  ): Promise<AssinaturaUsuario | null> {
    const usuario = await this.usuarioService.obterPorEmail(email);

    const isMatchPassword = await this.bcryptService.compararSenhaComHash(
      usuario,
      senha,
    );

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
