import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removes User id', this.id);
  }
}
