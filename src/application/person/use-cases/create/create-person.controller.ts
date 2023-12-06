import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePersonUseCase } from './create-person.use-case';
import { CreatePersonInput } from './dto/create-person.dto';

@Controller('persons')
@ApiTags('Person')
export class CreatePersonController {
  constructor(private readonly createPersonUseCase: CreatePersonUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a Person' })
  @ApiResponse({
    status: 201,
    description: 'Created Person',
  })
  async create(@Body() createPersonDto: CreatePersonInput) {
    await this.createPersonUseCase.execute(createPersonDto);
  }
}
