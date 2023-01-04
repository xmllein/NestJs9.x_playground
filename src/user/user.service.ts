import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // 查找全部
  findAll() {
    return [
      {
        id: 1,
        name: '张三',
        age: 20,
      },
      {
        id: 2,
        name: '李四',
        age: 21,
      },
    ];
  }
}
