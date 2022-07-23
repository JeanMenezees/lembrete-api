import { ApiProperty } from '@nestjs/swagger';

export class CriarUsuarioDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;
}
