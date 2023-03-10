import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// 引入服务
import { ArticleService } from './article.service';

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  // http://localhost:3000/article
  // 文章页面
  @Get()
  async index() {
    // return '我是文章页面';
    return {
      data: await this.articleService.getArticle(),
    };
  }

  // 增加文章
  @Post('create')
  create(): void {
    // return '我是增加文章页面';
    this.articleService.createArticle();
  }

  // 修改文章
  @Patch('update')
  async update() {
    // return '我是修改文章页面';
    console.log('修改文章');
    await this.articleService.updateArticle();
  }

  // 删除
  @Delete('delete')
  async delete() {
    // return '我是删除文章页面';
    console.log('删除文章');
    await this.articleService.deleteArticle();
  }
}
