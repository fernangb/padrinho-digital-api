import {
  BaseEntity,
  BaseEntityProps,
} from 'src/domain/@shared/entities/base.entity';
import { DonationEntity } from 'src/domain/donation/entities/donation.entity';
import { EventEntity } from 'src/domain/event/entities/event.entity';
import { PersonEntity } from 'src/domain/person/entities/person.entity';
import { SponsorEntity } from 'src/domain/sponsor/entities/sponsor.entity';

interface SponsoredEntityProps extends BaseEntityProps {
  person: PersonEntity;
  event: EventEntity;
  sponsor?: SponsorEntity;
  donation: DonationEntity;
  isActive: boolean;
}

export class SponsoredEntity extends BaseEntity {
  person: PersonEntity;
  event: EventEntity;
  sponsor?: SponsorEntity;
  donation: DonationEntity;
  isActive: boolean;

  constructor(props: SponsoredEntityProps) {
    super({
      id: props.id,
      createDate: props.createDate,
      updateDate: props.updateDate,
    });
    this.person = props.person;
    this.event = props.event;
    this.sponsor = props.sponsor;
    this.donation = props.donation;
    this.isActive = props.isActive;
  }
}
