import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { type } from 'os';
import { AuthService } from 'src/aplicacao/auth/auth.service';
import { LocalAuthGuard } from 'src/aplicacao/auth/strategies/local/local-auth.guard';
import { UsuarioService } from 'src/aplicacao/usuario/usuario.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { LogarUsuarioDto } from './dto/logar-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
  ) {}

  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200 })
  @ApiBody({ type: [LogarUsuarioDto] })
  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiBody({ type: [CriarUsuarioDto] })
  @ApiResponse({ status: 409, description: 'Este e-mail já está sendo usado.' })
  @ApiResponse({ status: 200 })
  @Post('/registrar')
  public async registrar(@Body() criarUsuarioDto: CriarUsuarioDto) {
    const usuarioExistente = await this.usuarioService.obterPorEmail(
      criarUsuarioDto.email,
    );

    if (usuarioExistente) {
      throw new HttpException('Este e-mail já está sendo usado', 409);
    }

    this.usuarioService.criarUsuario(criarUsuarioDto);
  }
}
