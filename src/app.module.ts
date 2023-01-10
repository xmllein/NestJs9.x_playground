import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
// mongoose
import { MongooseModule } from '@nestjs/mongoose';
// 配置数据库模型
import { ArticleSchema } from './schema/article.schema';

// mysql
import { TypeOrmModule } from '@nestjs/typeorm';
// 配置数据库模型
import { HouseEntity } from './entity/house.entity';

// 引入中间件
import { InitMiddleware } from './middleware/init/init.middleware';
// 文章服务
import { ArticleService } from './article/article.service';
// 房子控制器
import { HouseController } from './house/house.controller';
// import { ServiceService } from './house/service/service.service';
import { ServiceService } from './house/house/service/service.service';
// import { ServiceService } from './article/service/service.service';
import { HouseService } from './house/house/house.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    // mongodb配置数据库
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    // mongodb配置数据库模型
    MongooseModule.forFeature([
      { name: 'Article', schema: ArticleSchema, collection: 'article' },
    ]),
    // mysql配置数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'egg_house',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // mysql配置数据库模型
    TypeOrmModule.forFeature([HouseEntity]),
    CategoryModule,
  ],

  controllers: [
    AppController,
    ArticleController,
    UserController,
    HouseController,
  ],
  providers: [
    AppService,
    UserService,
    ArticleService,
    ServiceService,
    HouseService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 配置中间件
    consumer.apply(InitMiddleware).forRoutes('user');
  }
}
