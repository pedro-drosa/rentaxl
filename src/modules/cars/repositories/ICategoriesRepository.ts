import Category from '../entities/Category';

export type ICreateCategoryDTO = {
  name: string;
  description: string;
};

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}
