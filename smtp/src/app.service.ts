import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  async send(description: string, recipient: string) {
    console.log(description);
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_EMAIL_PASS,
      },
    });
    let mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: recipient,
      subject: 'Авторизация ',
      html: `test`,
    };
    const send = await transporter.sendMail(mailOptions);
    console.log('send : ', send);
    return description;
  }
}
