import { Injectable } from '@nestjs/common';
// 引入模型
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ArticleService {
  constructor(
    // 注入模型
    @InjectModel('Article') private readonly articleModel,
  ) {}
  // 添加文章
  async createArticle() {
    this.articleModel.create({
      title: '我是标题1',
      author: '我是作者1',
      keywords: '我是关键字1',
      content: '我是内容1',
      status: 1,
    });
  }

  // 查询文章
  async getArticle() {
    return await this.articleModel.find();
  }

  // 修改文章
  async updateArticle() {
    await this.articleModel.updateOne(
      { _id: '63b3e66595907bd24efcf87b' },
      {
        title: '我是标题2',
        content: '我是内容2',
      },
    );
  }

  // 删除文章
  async deleteArticle() {
    await this.articleModel.deleteOne({ _id: '63b3e6d0dcf46a023765a240' });
  }
}
