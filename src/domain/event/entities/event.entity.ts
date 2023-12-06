import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';
import { PlaceEntity } from 'src/domain/place/entities/place.entity';

interface EventEntityProps extends BaseEntityProps {
  name: string;
  description: string;
  date: Date;
  maxDonationDate: Date;
  place: PlaceEntity;
  isActive: boolean;
}
export class EventEntity extends BaseEntity {
  name: string;
  description: string;
  date: Date;
  maxDonationDate: Date;
  place: PlaceEntity;
  isActive: boolean;

  constructor(props: EventEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.name = props.name;
    this.description = props.description;
    this.date = props.date;
    this.maxDonationDate = props.maxDonationDate;
    this.place = props.place;
    this.isActive = props.isActive;
  }
}
