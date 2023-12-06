import { DonationEntity } from '../entities/donation.entity';

export interface DonationRepositoryInterface {
  create(entity: DonationEntity): Promise<void>;
}
