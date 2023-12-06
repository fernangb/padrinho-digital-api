import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';

interface DonationEntityProps extends BaseEntityProps {
  name: string;
  quantity: number;
  price?: number;
  type: string;
  status: string;
}
export class DonationEntity extends BaseEntity {
  name: string;
  quantity: number;
  price?: number;
  type: string;
  status: string;

  constructor(props: DonationEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.name = props.name;
    this.quantity = props.quantity;
    this.price = props.price;
    this.type = props.type;
    this.status = props.status;
  }
}
