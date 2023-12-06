import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreatePersonInput {
  @ApiProperty({ example: 'Fulano' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'de Tal' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '2000-01-01' })
  @IsDate()
  birthDate: Date;
}

export type CreatePersonOutput = void;
