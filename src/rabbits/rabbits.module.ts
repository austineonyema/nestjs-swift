import { Module } from '@nestjs/common';
import { RabbitsService } from './rabbits.service';
import { RabbitsController } from './rabbits.controller';

@Module({
  controllers: [RabbitsController],
  providers: [RabbitsService],
})
export class RabbitsModule {}
