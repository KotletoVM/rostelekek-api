import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { EmailModule } from '../email/email.module';
import { CustomerModule } from '../customer/customer.module';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), EmailModule, CustomerModule, ServiceModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
