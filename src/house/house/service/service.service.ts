import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HouseEntity } from 'src/entity/house.entity';
@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(HouseEntity)
    private readonly houseRepository: Repository<HouseEntity>,
  ) {}

  // 获取房屋列表
  async getHouseList() {
    return await this.houseRepository.find();
  }

  // 添加房屋
  async createHouse() {
    await this.houseRepository.insert({
      name: '我是房屋1',
      info: '我是房屋信息1',
      address: '我是房屋地址1',
      price: 100,
      publishTime: '2020-01-01',
      cityCode: '110000',
      showCount: 100,
      startTime: '2020-01-01',
      endTime: '2020-01-01',
    });
  }

  // 修改房屋
  async updateHouse() {
    await this.houseRepository.update(
      { id: 1 },
      {
        name: '我是房屋2',
        info: '我是房屋信息2',
        address: '我是房屋地址2',
        price: 200,
        publishTime: '2020-01-02',
        cityCode: '110000',
        showCount: 200,
        startTime: '2020-01-02',
        endTime: '2020-01-02',
      },
    );
  }

  // 删除房屋
  async deleteHouse() {
    await this.houseRepository.delete({ id: 1 });
  }
}
