import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database';
import Category from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  private static instance: ICategoriesRepository;

  private constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  public static getInstance() {
    if (!CategoriesRepository.instance) {
      this.instance = new CategoriesRepository();
    }
    return this.instance;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Category | null> {
    return this.repository.findOne({ where: { name } });
  }
}

export default CategoriesRepository;
