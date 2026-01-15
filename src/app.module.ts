import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import { RabbitsModule } from './rabbits/rabbits.module';

@Module({
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService],
  imports: [RabbitsModule],
})
export class AppModule {}
