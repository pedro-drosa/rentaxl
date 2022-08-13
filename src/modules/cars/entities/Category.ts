import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
class Category {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;

  constructor(
    name: string,
    description: string,
    created_at?: Date,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.created_at = created_at || new Date();
    this.id = id || uuidV4();
  }
}

export default Category;
