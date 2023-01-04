// 房子实体表
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('house1')
export class HouseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 房子名称
  @Column()
  name: string;

  // 房子描述
  @Column()
  info: string;

  // 房子地址
  @Column()
  address: string;

  // 房子价格
  @Column()
  price: number;

  // 房子发布时间
  @Column()
  publishTime: string;

  // 城市代码
  @Column()
  cityCode: string;

  // 展示次数
  @Column()
  showCount: number;

  // 开始出租时间
  @Column()
  startTime: string;

  // 结束出租时间
  @Column()
  endTime: string;
}
