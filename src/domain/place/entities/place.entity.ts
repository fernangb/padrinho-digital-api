import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';

interface PlaceEntityProps extends BaseEntityProps {
  name: string;
  description: string;
  type: string;
  address: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isActive: boolean;
}

export class PlaceEntity extends BaseEntity {
  name: string;
  description: string;
  type: string;
  address: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isActive: boolean;

  constructor(props: PlaceEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.name = props.name;
    this.description = props.description;
    this.type = props.type;
    this.address = props.address;
    this.zipCode = props.zipCode;
    this.neighborhood = props.neighborhood;
    this.city = props.city;
    this.state = props.state;
    this.country = props.country;
    this.isActive = props.isActive;
  }
}
