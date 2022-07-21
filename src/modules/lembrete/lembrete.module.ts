import { Module } from '@nestjs/common';
import { LembreteController } from 'src/api/lembrete/lembrete.controller';
import { LembreteService } from 'src/aplicacao/lembrete/lembrete.service';

@Module({
  providers: [LembreteService],
  controllers: [LembreteController],
})
export class LembreteModule {}
