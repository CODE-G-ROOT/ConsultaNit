import { UserNit } from 'src/routes/users_nits/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';

@Entity('nits')
export class Nit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  secondName?: string;

  @Column({ type: 'varchar', length: 100 })
  firstLastName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  secondLastName?: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'text' })
  description_state: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date | null;

  @ManyToMany(() => UserNit, (userNit) => userNit.nit)
  usersNits: UserNit[];
}
