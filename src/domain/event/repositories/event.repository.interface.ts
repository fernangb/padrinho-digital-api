import { EventEntity } from '../entities/event.entity';

export interface EventRepositoryInterface {
  create(entity: EventEntity): Promise<void>;
}
