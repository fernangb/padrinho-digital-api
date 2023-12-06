import { BaseEntity } from '../base.entity';

describe('Base Entity', () => {
  it('should create a base entity if data does not exists', () => {
    const createDate = undefined;
    const updateDate = undefined;
    const id = undefined;

    const entity = new BaseEntity({ id, createDate, updateDate });

    expect(entity.id).toBeDefined();
    expect(entity.createDate).toBeDefined();
    expect(entity.updateDate).toEqual(entity.createDate);
  });

  it('should create a base entity if data exists', () => {
    const createDate = new Date('2023-01-01');
    const updateDate = new Date('2023-02-02');
    const id = '845906fe-44f5-4575-ab8d-1f579d0544be';

    const entity = new BaseEntity({ id, createDate, updateDate });

    expect(entity).toEqual({
      id,
      createDate,
      updateDate,
    });
  });
});
