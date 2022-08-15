import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  driver_license: string;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  created_at: Date;
  constructor(
    name: string,
    username: string,
    password: string,
    email: string,
    driver_license: string,
    created_at?: Date,
    id?: string
  ) {
    this.id = id || uuidV4();
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.driver_license = driver_license;
    this.isAdmin = false;
    this.created_at = created_at || new Date();
  }
}

export default User;
