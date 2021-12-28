import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'send' })
  send(data: any) {
    console.log('aza : ', data);
    return this.appService.send(data.description, data.recipient);
  }
}
