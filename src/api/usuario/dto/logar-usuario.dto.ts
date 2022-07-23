import { ApiProperty } from '@nestjs/swagger';

export class LogarUsuarioDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
