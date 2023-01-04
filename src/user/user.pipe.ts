import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
// 引入验证joi
import * as Joi from '@hapi/joi';
@Injectable()
export class UserPipe implements PipeTransform {
  // 定义验证规则
  // private _schema = Joi.object({
  //   username: Joi.string().required(),
  //   password: Joi.string().required(),
  // });
  // public get schema() {
  //   return this._schema;
  // }
  // public set schema(value) {
  //   this._schema = value;
  // }

  private schema: Joi.ObjectSchema;

  // 构造函数
  constructor(schema: Joi.ObjectSchema) {
    this.schema = schema;
  }

  transform(value: any, metadata: ArgumentMetadata) {
    // 打印 get post 传递过来的值
    // 验证数据是否合法
    console.log(value);
    const { error } = this.schema.validate(value);
    if (error) {
      throw new Error(error.message);
    }
    return value;
  }
}
