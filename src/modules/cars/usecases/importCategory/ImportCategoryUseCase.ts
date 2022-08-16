import { parse } from 'csv-parse';
import { createReadStream, promises } from 'fs';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

type IImportCategory = {
  name: string;
  description: string;
};

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = createReadStream(file.path);
      const parser = parse({ delimiter: ',' });
      const categories: IImportCategory[] = [];
      stream.pipe(parser);
      parser
        .on('data', (data) => {
          const [name, description] = data;
          categories.push({ name, description });
        })
        .on('end', () => {
          promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (error) => reject(error));
    });
  }

  async excute(file?: Express.Multer.File): Promise<void> {
    if (!file) throw new AppError('no file sent');
    const categories = await this.loadCategories(file);
    categories.forEach(async (category) => {
      const { name } = category;
      const categoryExists = await this.categoriesRepository.findByName(name);
      if (!categoryExists) this.categoriesRepository.create(category);
    });
  }
}

export default ImportCategoryUseCase;
