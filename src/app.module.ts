import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioService } from './aplicacao/usuario/usuario.service';
import { LembreteService } from './aplicacao/lembrete/lembrete.service';
import { UsuarioController } from './api/usuario/usuario.controller';
import { LembreteController } from './api/lembrete/lembrete.controller';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LembreteModule } from './modules/lembrete/lembrete.module';

@Module({
  imports: [UsuarioModule, LembreteModule],
  controllers: [AppController, UsuarioController, LembreteController],
  providers: [AppService, UsuarioService, LembreteService],
})
export class AppModule {}
