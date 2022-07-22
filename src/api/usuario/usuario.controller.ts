import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/aplicacao/auth/auth.service';
import { LocalAuthGuard } from 'src/aplicacao/auth/strategies/local-auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
