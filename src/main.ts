import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// http 平台
import { NestExpressApplication } from '@nestjs/platform-express';
// 引入cookie
import * as cookieParser from 'cookie-parser';
// 引入session
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 静态资源
  app.useStaticAssets('public');
  // 模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  // cookie
  app.use(cookieParser('asdfasdf234234'));
  // session
  app.use(
    session({
      secret: 'asdfasdf234234',
      cookie: { maxAge: 900000 },
    }),
  );

  await app.listen(3000);
}
bootstrap();