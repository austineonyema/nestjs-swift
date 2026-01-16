import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitsModule } from './rabbits/rabbits.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [RabbitsModule, CatsModule, DogsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
