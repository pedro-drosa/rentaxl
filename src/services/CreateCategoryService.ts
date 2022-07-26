import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({ name, description }: IRequest) {
    const categoryExists = await this.categoriesRepository.findByName(name);
    if (categoryExists) throw new Error('Category already exists');
    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
