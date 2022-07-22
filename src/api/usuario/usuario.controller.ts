import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/aplicacao/auth/auth.service';
import { LocalAuthGuard } from 'src/aplicacao/auth/strategies/local/local-auth.guard';
import { UsuarioService } from 'src/aplicacao/usuario/usuario.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/registrar')
  public async registrar(@Body() criarUsuarioDto: CriarUsuarioDto) {
    const usuarioExistente = this.usuarioService.obterPorEmail(
      criarUsuarioDto.email,
    );

    if (usuarioExistente) {
      throw new HttpException('Este e-mail já esta sendo usado', 409);
    }

    this.usuarioService.criarUsuario(criarUsuarioDto);
  }
}
