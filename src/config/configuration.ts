//import { User } from "src/user/entities/user.entity";

import { Customer } from '../customer/entities/customer.entity';
import { Order } from "../order/entities/order.entity";
import { Service } from "../service/entities/service.entity";
import { WorkAct } from "../work-act/entities/work-act.entity";
import { Worker } from "../worker/entities/worker.entity"
import { Equipment } from "../equipment/entities/equipment.entity";
export const config = () => ({
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Customer, Order, Service, Worker, WorkAct, Equipment],
    synchronize: true, //true,
    ssl: { rejectUnauthorized: false }
  },
  access_token: {
    privateKey: Buffer.from(process.env.ACCESS_JWT_PRIVATE, 'base64').toString('ascii'),
    publicKey: Buffer.from(process.env.ACCESS_JWT_PUBLIC, 'base64').toString('ascii'),
    expiresIn: process.env.ACCESS_JWT_EXPIRESIN
  },
  refresh_token:{
    privateKey: Buffer.from(process.env.REFRESH_JWT_PRIVATE, 'base64').toString('ascii'),
    publicKey: Buffer.from(process.env.REFRESH_JWT_PUBLIC, 'base64').toString('ascii'),
    expiresIn: process.env.REFRESH_JWT_EXPIRESIN
  },
  verification:{
    secret: process.env.VERIFICATION_JWT_SECRET,
    expiresIn: process.env.VERIFICATION_JWT_EXPIRESIN,
    url: process.env.EMAIL_CONFIRMATION_URL
  },
  password_reset: {
    secret: process.env.RESET_PASSWORD_JWT_SECRET,
    expiresIn: process.env.RESET_PASSWORD_JWT_EXPIRESIN,
    url: process.env.RESET_PASSWORD_URL
  },
  email:{
    service: process.env.EMAIL_SERVICE,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD
  }
});