import { SponsorEntity } from '../entities/sponsor.entity';

export interface SponsorRepositoryInterface {
  create(entity: SponsorEntity): Promise<void>;
}
