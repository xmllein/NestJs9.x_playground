import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好 nestJs!';
  }

  // 订单服务
  getOrder(): string {
    return '这里是订单服务';
  }
}
