import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/aplicacao/auth/strategies/local.strategy';
import { AuthService } from '../../aplicacao/auth/auth.service';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    forwardRef(() => UsuarioModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
