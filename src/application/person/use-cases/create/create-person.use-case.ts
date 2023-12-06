import { Inject, Injectable } from '@nestjs/common';
import { UseCaseInterface } from 'src/domain/@shared/use-cases/use-case.interface';
import { CreatePersonInput, CreatePersonOutput } from './dto/create-person.dto';
import { PersonRepositoryInterface } from 'src/domain/person/repositories/person.repository.interface';
import { PersonEntity } from 'src/domain/person/entities/person.entity';

@Injectable()
export class CreatePersonUseCase
  implements UseCaseInterface<CreatePersonInput, CreatePersonOutput>
{
  constructor(
    @Inject('PersonRepositoryInterface')
    private repository: PersonRepositoryInterface,
  ) {}

  async execute(props: CreatePersonInput): Promise<void> {
    const person = new PersonEntity({
      firstName: props.firstName,
      lastName: props.lastName,
      birthDate: props.birthDate,
    });

    await this.repository.create(person);
  }
}
