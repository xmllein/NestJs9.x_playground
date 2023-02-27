import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Body,
  Render,
  Response,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  UsePipes,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UserPipe } from './user.pipe';
import * as Joi from '@hapi/joi';
// 引入守卫
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('用户管理')
@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  // 用户中心
  @Get()
  @Render('default/user')
  index(@Response() res, @Request() req) {
    // 设置cookie
    res.cookie('name', 'zhangsan', {
      maxAge: 900000,
      httpOnly: true,
      signed: true,
    });
    // 设置session
    req.session.username = '张三';
    return {
      title: '用户中心',
    };
  }

  // 用户列表
  @Get('list')
  list(): Array<any> {
    return this.userService.findAll();
  }

  // 增加用户
  @Post('create')
  @UsePipes(
    new UserPipe(
      Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
    ),
  )
  create(@Query() query): string {
    return `增加用户=== ${JSON.stringify(query)}`;
  }

  // 用户编辑
  @Patch('edit')
  edit(@Request() req): string {
    return `用户编辑=== ${JSON.stringify(req.query)}`;
  }

  // 用户登录
  @Post('login')
  @UseInterceptors(FileInterceptor('file'))
  login(@Request() req, @UploadedFile() file): string {
    console.log(file);
    // 保存文件
    const writeStream = createWriteStream(
      join(
        __dirname,
        '..',
        '..',
        'public',
        'upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );
    writeStream.write(file.buffer);
    return `用户登录=== ${JSON.stringify(req.body)}`;
  }

  // 用户登录(上传多个文件)
  @Post('login2')
  @UseInterceptors(FilesInterceptor('file'))
  login2(@Body() data, @UploadedFiles() files): string {
    console.log(files);
    console.log(data);
    // 保存文件
    // files.forEach((file) => {
    //   const writeStream = createWriteStream(
    //     join(
    //       __dirname,
    //       '..',
    //       '..',
    //       'public',
    //       'upload',
    //       `${Date.now()}-${file.originalname}`,
    //     ),
    //   );
    //   writeStream.write(file.buffer);
    // });
    return `用户登录=== ${JSON.stringify(data)}`;
  }

  // 获取动态路由
  @Get('info/:id')
  info(@Request() req): string {
    return `获取动态路由=== ${JSON.stringify(req.params)}`;
  }
}
