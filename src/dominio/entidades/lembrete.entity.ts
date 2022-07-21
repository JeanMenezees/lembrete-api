import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Lembrete {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column({ default: false })
  completo: boolean;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;
}
