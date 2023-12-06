import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';

interface PersonEntityProps extends BaseEntityProps {
  firstName: string;
  lastName: string;
  birthDate: Date;
}
export class PersonEntity extends BaseEntity {
  firstName: string;
  lastName: string;
  birthDate: Date;

  constructor(props: PersonEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.birthDate = props.birthDate;
  }

  validate() {
    if (this.birthDate > new Date(Date.now()))
      throw new Error('Data de nascimento inválida');
  }
}
