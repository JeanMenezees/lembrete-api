import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  UseGuards,
  Request,
  HttpException,
} from '@nestjs/common';
import { LembreteService } from 'src/aplicacao/lembrete/lembrete.service';
import { AtualizarLembreteDto } from './dto/atualizar-lembrete.dto';
import { CriarLembreteDto } from './dto/criar-lembrete.dto';
import { AtualizarLembreteParams } from './params/atualizar-lembrete.params';
import { ObterUmLembreteParams } from './params/obter-um-lembrete.param';
import { DeletarLembreteParams } from './params/deletar-lembrete.params';
import { JwtAuthGuard } from 'src/aplicacao/auth/strategies/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Lembrete } from 'src/dominio/entidades/lembrete.entity';

@Controller('lembrete')
export class LembreteController {
  constructor(private lembreteService: LembreteService) {}

  @ApiBody({ type: [CriarLembreteDto] })
  @ApiBearerAuth()
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post()
  public async criarLembrete(
    @Request() req: any,
    @Body() criarLembreteDto: CriarLembreteDto,
  ) {
    await this.lembreteService.criarLembrete(req.user.userId, criarLembreteDto);
  }

  @ApiResponse({ status: 200 })
  @ApiResponse({ type: [Lembrete] })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  public async obterTodos(@Request() req: any): Promise<Lembrete[]> {
    return await this.lembreteService.obterTodos(req.user.userId);
  }

  @ApiResponse({ status: 403, description: 'Lembrete não encontrado' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'number' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async obterPorId(
    @Request() req: any,
    @Param() params: ObterUmLembreteParams,
  ) {
    const lembrete = await this.lembreteService.obterPorId(
      req.user.userId,
      params.id,
    );

    if (lembrete) return lembrete;
    else throw new HttpException('Lembrete não encontrado', 403);
  }

  @ApiResponse({ status: 403, description: 'Lembrete não encontrado' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: [AtualizarLembreteDto] })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  public async atualizarLembrete(
    @Request() req: any,
    @Param() params: AtualizarLembreteParams,
    @Body() atualizarLembreteDto: AtualizarLembreteDto,
  ) {
    const lembrete = await this.lembreteService.obterPorId(
      req.user.userId,
      params.id,
    );

    if (lembrete)
      this.lembreteService.atualizarLembrete(
        req.user.userId,
        params.id,
        atualizarLembreteDto,
      );
    else throw new HttpException('Lembrete não encontrado', 403);
  }

  @ApiResponse({ status: 403, description: 'Lembrete não encontrado' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'number' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async deletarLembrete(
    @Request() req: any,
    @Param() params: DeletarLembreteParams,
  ) {
    const lembrete = await this.lembreteService.obterPorId(
      req.user.userId,
      params.id,
    );

    if (lembrete)
      this.lembreteService.deletarLembrete(req.user.userId, params.id);
    else throw new HttpException('Lembrete não encontrado', 403);
  }
}
