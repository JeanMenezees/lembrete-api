import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CriarUsuarioDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  senha: string;
}
