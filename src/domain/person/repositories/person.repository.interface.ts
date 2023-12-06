import { PersonEntity } from '../entities/person.entity';

export interface PersonRepositoryInterface {
  create(entity: PersonEntity): Promise<void>;
}
