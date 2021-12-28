import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file.dto';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class AppService {
  async createFile(
    files: Express.Multer.File[],
  ): Promise<FileElementResponse[]> {
    console.log(4);

    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const response: FileElementResponse[] = [];

    for (const file of files) {
      console.log('12');
      console.log('12', file.buffer);
      console.log('12', typeof file.buffer);
      console.log('12', file.buffer.byteOffset);
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      console.log('13');
      response.push({
        url: `${dateFolder}/${file.originalname}`,
        name: file.originalname,
      });
      console.log('14');
    }
    console.log('15 : ', response);
    return response;
  }
}
