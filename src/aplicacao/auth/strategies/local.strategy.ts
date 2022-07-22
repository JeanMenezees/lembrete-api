import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AssinaturaUsuario } from 'src/aplicacao/usuario/assinatura-usuario';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<AssinaturaUsuario> {
    const assinaturaDoUsuario = await this.authService.validarUsuario(
      username,
      password,
    );

    if (!assinaturaDoUsuario) {
      throw new UnauthorizedException();
    }

    return assinaturaDoUsuario;
  }
}
