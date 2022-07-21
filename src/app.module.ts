import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LembreteModule } from './modules/lembrete/lembrete.module';

@Module({
  imports: [UsuarioModule, LembreteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
