import { ApiProperty } from '@nestjs/swagger';

export class CriarLembreteDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  descricao: string;
}
