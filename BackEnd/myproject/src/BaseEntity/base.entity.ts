import { Entity, Column } from 'typeorm';

@Entity()
export class BaseEntity {
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date;
  @Column({ type: 'datetime', default: () => 'NOW()' })
  updatedAt: Date;
}
