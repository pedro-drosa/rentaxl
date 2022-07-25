import { v4 as uuidV4 } from 'uuid';

class Category {
  name: string;
  description: string;
  created_at: Date;
  id: string;

  constructor(
    name: string,
    description: string,
    created_at: Date,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.created_at = created_at;
    this.id = id || uuidV4();
  }
}

export default Category;
