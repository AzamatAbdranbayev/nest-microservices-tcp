import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_SMTP') private readonly smtpApp: ClientProxy,
    @Inject('SERVICE_AUTH') private readonly authApp: ClientProxy,
    @Inject('SERVICE_FILE_STORAGE')
    private readonly fileStorageApp: ClientProxy,
  ) {}

  sendMail(description: string, recipient: string) {
    const pattern = { cmd: 'send' };
    const payload = { description, recipient };
    return this.smtpApp.send<string>(pattern, payload).pipe(
      map((message: string) => {
        console.log('message: ', message);
        return message;
      }),
    );
  }

  registerUser() {
    const pattern = { cmd: 'register_user' };
    const payload = { description: 'sd' };
    return this.authApp.send<string>(pattern, payload).pipe(
      map((message: string) => {
        console.log('message: ', message);
        return message;
      }),
    );
  }

  createFile(files: Express.Multer.File[]) {
    console.log(2);
    const pattern = { cmd: 'create_file' };
    const payload = { description: 'sd' };
    // this.fileStorageApp.send(pattern, { files }).pipe();
    return this.fileStorageApp
      .send<Express.Multer.File>(pattern, { files })
      .pipe(
        map((message: any) => {
          console.log('message: ', message);
          return message;
        }),
      );
  }
}
