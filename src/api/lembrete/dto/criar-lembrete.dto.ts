import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CriarLembreteDto {
  @ApiProperty()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  descricao: string;
}
