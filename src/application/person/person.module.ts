import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormPersonModel } from 'src/infra/repositories/person/typeorm/models/typeorm-person.model';
import { CreatePersonController } from './use-cases/create/create-person.controller';
import { CreatePersonUseCase } from './use-cases/create/create-person.use-case';
import { TypeormPersonRepository } from 'src/infra/repositories/person/typeorm/repositories/typeorm-person.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormPersonModel])],
  controllers: [CreatePersonController],
  providers: [
    CreatePersonUseCase,
    {
      provide: 'PersonRepositoryInterface',
      useClass: TypeormPersonRepository,
    },
  ],
  exports: [
    {
      provide: 'PersonRepositoryInterface',
      useClass: TypeormPersonRepository,
    },
  ],
})
export class PersonModule {}
