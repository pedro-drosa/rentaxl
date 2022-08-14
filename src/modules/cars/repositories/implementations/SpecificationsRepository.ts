import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database';
import Specification from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Repository<Specification>;

  constructor() {
    this.specifications = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({ name, description });
    await this.specifications.save(specification);
  }

  async findByName(name: string): Promise<Specification | null> {
    return this.specifications.findOne({ where: { name } });
  }
}

export default SpecificationsRepository;
