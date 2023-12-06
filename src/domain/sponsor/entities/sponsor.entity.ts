import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';

interface SponsorEntityProps extends BaseEntityProps {
  firstName: string;
  lastName: string;
  birthDate: Date;
  document: string;
  email: string;
  phone: string;
}
export class SponsorEntity extends BaseEntity {
  firstName: string;
  lastName: string;
  birthDate: Date;
  document: string;
  email: string;
  phone: string;

  constructor(props: SponsorEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.birthDate = props.birthDate;
    this.document = props.document;
    this.email = props.email;
    this.phone = props.phone;

    this.validate();
  }

  validate() {
    if (this.birthDate > new Date(Date.now()))
      throw new Error('Data de nascimento inválida');
  }
}
