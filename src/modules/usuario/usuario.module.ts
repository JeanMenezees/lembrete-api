import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/api/usuario/usuario.controller';
import { UsuarioService } from 'src/aplicacao/usuario/usuario.service';

@Module({
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
