import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lembrete } from './lembrete.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public senha: string;

  @OneToMany((type) => Lembrete, (lembrete) => lembrete.usuario)
  public lembretes: Lembrete[];
}
