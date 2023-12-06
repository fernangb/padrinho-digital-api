import { SponsoredEntity } from '../entities/sponsored.entity';

export interface SponsoredRepositoryInterface {
  create(entity: SponsoredEntity): Promise<void>;
}
