import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LembreteModule } from './modules/lembrete/lembrete.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuarioModule, LembreteModule, ConfigModule.forRoot()],
})
export class AppModule {}
