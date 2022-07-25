import Category from '../models/Category';

type ICreateCategoryDTO = {
  name: string,
  description: string,
};

class CategoriesRepository {
  categories: Category[] = [];

  create({ name, description }: ICreateCategoryDTO) {
    this.categories.push(new Category(name, description));
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export default CategoriesRepository;
