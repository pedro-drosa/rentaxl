import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  specificationsRepository: ISpecificationsRepository;

  constructor(specificationRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationRepository;
  }

  async execute({ name, description }: IRequest) {
    const specificationExists = await this.specificationsRepository.findByName(
      name
    );
    if (specificationExists) throw new Error('Specification already exists');
    this.specificationsRepository.create({ name, description });
  }
}

export default CreateSpecificationService;
