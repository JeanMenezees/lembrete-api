import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Lembrete {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column()
  @ApiProperty()
  public titulo: string;

  @Column()
  @ApiProperty()
  public descricao: string;

  @Column({ default: false })
  @ApiProperty()
  public completo: boolean;

  @CreateDateColumn()
  public criadoEm: Date;

  @UpdateDateColumn()
  public atualizadoEm: Date;

  @ManyToOne((type) => Usuario, (usuario) => usuario.lembretes)
  public usuario: Usuario;
}
