import { v4 as uuidV4 } from 'uuid';

class Category {
  id: string;
  name: string;
  description: string;
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
