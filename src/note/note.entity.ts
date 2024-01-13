// note.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
