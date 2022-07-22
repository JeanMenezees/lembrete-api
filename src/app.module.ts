import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario.module';
import { LembreteModule } from './modules/lembrete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    UsuarioModule,
    LembreteModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'lembretesDB',
      entities: [__dirname + '/**/*.entity.js'],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
