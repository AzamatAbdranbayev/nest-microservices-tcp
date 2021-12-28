import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/mail/new')
  sendMail(
    @Body('description') description: string,
    @Body('recipient') recipient: string,
  ) {
    console.log(1);
    return this.appService.sendMail(description, recipient);
  }

  @Post('/user/register')
  registerUser() {
    console.log(1);
    return this.appService.registerUser();
  }

  @Post('/file/new')
  @UseInterceptors(FileInterceptor('files'))
  createFile(@UploadedFile() file: Express.Multer.File) {
    console.log(1);
    return this.appService.createFile([file]);
  }
}
