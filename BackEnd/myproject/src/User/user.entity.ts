import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Generated("increment")
  id: number;
  @Column({unique:true})
  email: string;
  @Column()
  password: string;
  @Column()
  userName: string;
  @Column()
  phone:number;
  @Column({default:1})
  status:number
  @Column({default:1})
  role:number
}