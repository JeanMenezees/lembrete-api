import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LembreteController } from 'src/api/lembrete/lembrete.controller';
import { LembreteService } from 'src/aplicacao/lembrete/lembrete.service';
import { Lembrete } from 'src/dominio/entidades/lembrete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lembrete])],
  providers: [LembreteService],
  controllers: [LembreteController],
})
export class LembreteModule {}
