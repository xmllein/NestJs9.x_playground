import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// 引入服务
import { ServiceService } from './house/service/service.service';

@ApiTags('民宿')
@Controller('house')
export class HouseController {
  constructor(private readonly houseService: ServiceService) {}
  // house 入口
  @Get()
  async index() {
    return '我是房屋页面';
  }

  // 获取房屋列表
  @Get('list')
  async list() {
    return {
      data: await this.houseService.getHouseList(),
    };
  }

  // 添加房屋
  @Get('create')
  async create() {
    console.log('添加房屋');
    await this.houseService.createHouse();
  }

  // 修改房屋
  @Get('update')
  async update() {
    console.log('修改房屋');
    await this.houseService.updateHouse();
  }
}
