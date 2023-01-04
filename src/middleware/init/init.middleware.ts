import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // 打印日期
    console.log(new Date());
    next();
  }
}
