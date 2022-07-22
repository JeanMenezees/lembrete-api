import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
} from '@nestjs/common';
import { LembreteService } from 'src/aplicacao/lembrete/lembrete.service';
import { AtualizarLembreteDto } from './dto/atualizar-lembrete.dto';
import { CriarLembreteDto } from './dto/criar-lembrete.dto';
import { AtualizarLembreteParams } from './params/atualizar-lembrete.params';
import { ObterUmLembreteParams } from './params/obter-um-lembrete.param';
import { DeletarLembreteParams } from './params/deletar-lembrete.params';

@Controller('lembrete')
export class LembreteController {
  constructor(private lembreteService: LembreteService) {}

  @Post()
  public async criarLembrete(@Body() criarLembreteDto: CriarLembreteDto) {
    await this.lembreteService.criarLembrete(criarLembreteDto);
  }

  @Get()
  public async obterTodos() {
    return await this.lembreteService.obterTodos();
  }

  @Get(':id')
  public async obterPorId(@Param() params: ObterUmLembreteParams) {
    return await this.lembreteService.obterPorId(params);
  }

  @Patch(':id')
  public async atualizarLembrete(
    @Param() params: AtualizarLembreteParams,
    @Body() atualizarLembreteDto: AtualizarLembreteDto,
  ) {
    this.lembreteService.atualizarLembrete(params, atualizarLembreteDto);
  }

  @Delete(':id')
  public async deletarLembrete(@Param() params: DeletarLembreteParams) {
    await this.lembreteService.deletarLembrete(params);
  }
}
