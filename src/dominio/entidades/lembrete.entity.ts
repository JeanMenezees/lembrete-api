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
  public id: number;

  @Column()
  public titulo: string;

  @Column()
  public descricao: string;

  @Column({ default: false })
  public completo: boolean;

  @CreateDateColumn()
  public criadoEm: Date;

  @UpdateDateColumn()
  public atualizadoEm: Date;

  @ManyToOne((type) => Usuario, (usuario) => usuario.lembretes)
  public usuario: Usuario;
}
