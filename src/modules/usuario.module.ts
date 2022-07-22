import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from 'src/api/usuario/usuario.controller';
import { UsuarioService } from 'src/aplicacao/usuario/usuario.service';
import { Usuario } from 'src/dominio/entidades/usuario.entity';
import { AuthModule } from './auth.module';
import { BcryptModule } from './bcrypt.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Usuario]),
    BcryptModule,
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
