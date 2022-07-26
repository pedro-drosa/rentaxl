import CategoriesRepository from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest) {
    const categoryAlreadExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadExists) throw new Error('Category already exists');
    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
