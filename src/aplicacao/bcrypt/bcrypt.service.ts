import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/dominio/entidades/usuario.entity';

@Injectable()
export class BcryptService {
  private saltRounds = 10;

  public async aplicarBcryptEmSenha(senha: string) {
    const senhaComHash: string = bcrypt.hashSync(senha, this.saltRounds);

    return senhaComHash;
  }

  public async compararSenhaComHash(
    usuario: Usuario,
    senha: string,
  ): Promise<boolean> {
    return bcrypt.compare(senha, usuario.senha);
  }
}
