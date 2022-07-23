import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/aplicacao/auth/strategies/jwt/jwt.strategy';
import { LocalStrategy } from 'src/aplicacao/auth/strategies/local/local.strategy';
import { AuthService } from '../aplicacao/auth/auth.service';
import { BcryptModule } from './bcrypt.module';
import { UsuarioModule } from './usuario.module';

@Module({
  imports: [
    forwardRef(() => UsuarioModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    BcryptModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
