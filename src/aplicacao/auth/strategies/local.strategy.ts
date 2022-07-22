import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Usuario } from 'src/dominio/entidades/usuario.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<{ id: number; email: string }> {
    const usuario = await this.authService.validarUsuario(username, password);

    if (!usuario) {
      throw new UnauthorizedException();
    }

    return usuario;
  }
}
