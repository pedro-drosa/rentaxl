import Category from '../../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static instance: ICategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance() {
    if (!CategoriesRepository.instance) {
      this.instance = new CategoriesRepository();
    }
    return this.instance;
  }

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
