import Category from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO) {
    this.categories.push(new Category(name, description));
  }

  async list() {
    return this.categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    return this.categories.find((category) => category.name === name);
  }
}

export default CategoriesRepository;
