import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeormPersonModel } from '../models/typeorm-Person.model';
import { TypeormPersonMapper } from '../mappers/typeorm-Person.mapper';
import { PersonRepositoryInterface } from 'src/domain/person/repositories/person.repository.interface';
import { PersonEntity } from 'src/domain/person/entities/person.entity';

export class TypeormPersonRepository implements PersonRepositoryInterface {
  constructor(
    @InjectRepository(TypeormPersonModel)
    private repository: Repository<TypeormPersonModel>,
  ) {}

  async create(entity: PersonEntity): Promise<void> {
    const model = TypeormPersonMapper.toModel(entity);

    await this.repository.save(this.repository.create(model));
  }
}
