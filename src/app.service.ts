import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!, the world is mine truly! get it right';
  }
}

// /"builder": "swc",
//     "typeCheck": true,
