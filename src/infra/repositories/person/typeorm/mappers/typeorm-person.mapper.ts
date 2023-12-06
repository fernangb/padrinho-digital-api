import { PersonEntity } from 'src/domain/person/entities/person.entity';
import { TypeormPersonModel } from '../models/typeorm-person.model';

export class TypeormPersonMapper {
  static toEntity(model: TypeormPersonModel): PersonEntity | null {
    if (!model) return null;

    return new PersonEntity({
      id: model.id,
      firstName: model.firstName,
      lastName: model.lastName,
      birthDate: model.birthDate,
      createDate: model.createDate,
      updateDate: model.updateDate,
    });
  }

  static toModel(entity: PersonEntity): TypeormPersonModel | null {
    if (!entity) return null;

    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      birthDate: entity.birthDate,
      createDate: entity.createDate,
      updateDate: entity.updateDate,
    } as TypeormPersonModel;
  }
}
