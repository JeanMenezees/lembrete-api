import { Module } from '@nestjs/common';
import { LembreteService } from './lembrete.service';
import { LembreteController } from './lembrete.controller';

@Module({
  controllers: [LembreteController],
  providers: [LembreteService]
})
export class LembreteModule {}
