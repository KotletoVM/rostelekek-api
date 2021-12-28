import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateServiceDto } from '../service/dto/create-service.dto';

@Injectable()
export class EmailService {
  private nodemailerTransport: Mail;

  constructor(
    private readonly configService: ConfigService
  ) {
    this.nodemailerTransport = createTransport({
      service: configService.get('email.service'),
      auth: {
        user: configService.get('email.user'),
        pass: configService.get('email.password'),
      }
    })
  }

  sendMail(options: Mail.Options) {
    return this.nodemailerTransport.sendMail(options);
  }

  public sendOrderMail(customer: CreateCustomerDto, service: CreateServiceDto) {
    const text = `${customer.name}, ваша заявка на подключение услуги "${service.name}" была передана сотрудникам.`;
    const internet = service.internet?`<h5>Интернет: ${service.internet}</h5>`:``
    const mobile = service.mobile?`<h5>Мобильная связь: ${service.mobile}</h5>`:``
    const tv = service.tv?`<h5>Телевидение: ${service.tv}</h5>`:``
    let category
    switch (service.category) {
      case 'video':
        category = 'Видео'
        break
      case '3in1':
        category = '3 в 1'
        break
      case '2in1':
        category = '2 в 1'
        break
      case '4in1':
        category = '4 в 1'
        break
      case 'homeInternet':
        category = 'Домашний интернет'
        break
    }
    const html = `<table style="vertical-align: middle; text-align: center; background-color: #CCCCCC; border: 0; margin: 0; font-family: Geneva, Arial, Helvetica, sans-serif;">` +
      `<tbody>` +
        `<tr>` +
        `<td><h2>Спасибо, что выбираете Ростелекек.</h2></td>` +
        `</tr>` +
        `<tr>` +
        `<td><h3>${customer.name}, Ваша заявка на подключение услуги была передана сотрудникам.</h3></td>` +
        `</tr>` +
        `<tr style='background-color: #DDDDDD'>` +
        `<td><h5>Услуга "${service.name}" в категории "${category}"</h5>` +
        internet + mobile + tv +
        `</td>` +
        `</tr>` +
        `<tr style='background-color: #DDDDDD'>` +
        `<td><h4>Цена: ${service.price}</h4></td>` +
        `</tr>` +
        `</tbody>` +
      `</table>`

    return this.sendMail({
      to: customer.email,
      subject: `${customer.name}, ваша заявка на подключение услуги была передана сотрудникам.`,
      text,
      html
    })
  }

}
