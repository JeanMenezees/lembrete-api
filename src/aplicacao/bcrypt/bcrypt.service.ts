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

  public async compararSenhaComHash(usuario: Usuario): Promise<boolean> {
    const senhaComHash: string = await this.aplicarBcryptEmSenha(usuario.senha);

    return bcrypt.compare(usuario.senha, senhaComHash);
  }
}
