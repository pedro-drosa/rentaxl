import Specification from '../models/Specification';

export type ICreateSpecificationDTO = {
  name: string;
  description: string;
};

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
}
