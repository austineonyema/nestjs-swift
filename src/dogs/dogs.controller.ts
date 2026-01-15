import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  find(): string {
    return 'i am dog number one!';
  }

  @Get('breed')
  findOne(): string {
    return 'this is special';
  }
}
