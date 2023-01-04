import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHello(@Request() req) {
    return {
      name: 'Nest',
      age: 20,
      myCookie: req.signedCookies.name,
      mySession: req.session.username,
    };
  }

  @Get('news')
  getNews(): string {
    return '这是自定义的方法， 页面， 路由';
  }

  // 产品列表
  @Get('product')
  getProduct(): string {
    return '这里产品列表';
  }

  // 订单列表
  @Get('order')
  getOrder(): string {
    return this.appService.getOrder();
  }
}
