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
}

export default CategoriesRepository;
