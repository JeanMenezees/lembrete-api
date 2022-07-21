import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LembreteModule } from './modules/lembrete/lembrete.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsuarioModule,
    LembreteModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'lembretesDB',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
