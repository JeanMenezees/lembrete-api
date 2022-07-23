import { ApiProperty } from '@nestjs/swagger';

export class AtualizarLembreteDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  completo: boolean;
}
