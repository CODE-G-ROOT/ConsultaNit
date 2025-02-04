import { Nit } from 'src/routes/nits/entities/nit.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  Column,
} from 'typeorm';

@Entity('user_nits')
export class UserNit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number; // ID del usuario, ya que está en otra base de datos

  @ManyToOne(() => Nit, (nit) => nit.usersNits, { onDelete: 'CASCADE' })
  nit: Nit;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
