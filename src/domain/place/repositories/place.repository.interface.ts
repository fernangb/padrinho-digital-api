import { PlaceEntity } from '../entities/place.entity';

export interface PlaceRepositoryInterface {
  create(entity: PlaceEntity): Promise<void>;
}
