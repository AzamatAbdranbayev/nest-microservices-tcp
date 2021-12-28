import {
  Controller,
  Get,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileElementResponse } from './dto/file.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @MessagePattern({ cmd: 'create_file' })
  // // @UseGuards()
  // // добавить защиту
  // @UseInterceptors(FileInterceptor('files'))
  // async createFile(
  //   @UploadedFile() file: Express.Multer.File,
  // ): Promise<FileElementResponse[]> {
  //   console.log(3);
  //   return this.appService.createFile([file]);
  // }

  @MessagePattern({ cmd: 'create_file' })
  // @UseGuards()
  // добавить защиту
  // @UseInterceptors(FileInterceptor('files'))
  async createFile(data: any) {
    console.log(3);
    console.log(data);
    return this.appService.createFile(data.files);
  }
}
