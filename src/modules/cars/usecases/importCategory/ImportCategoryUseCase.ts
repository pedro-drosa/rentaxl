import { parse } from 'csv-parse';
import { createReadStream } from 'fs';

type IImportCategory = {
  name: string;
  description: string;
};

class ImportCategoryUseCase {
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
        .on('end', () => resolve(categories))
        .on('error', (error) => reject(error));
    });
  }

  async excute(file?: Express.Multer.File): Promise<void> {
    if (!file) throw new Error('no file sent');
    const categories = await this.loadCategories(file);
    console.log(categories);
  }
}

export default ImportCategoryUseCase;
