import Specification from '../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    this.specifications.push(new Specification(name, description));
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}

export default SpecificationsRepository;
