import { Module } from '@nestjs/common';
import { BcryptService } from '../aplicacao/bcrypt/bcrypt.service';

@Module({
  providers: [BcryptService],
  exports: [BcryptService],
})
export class BcryptModule {}
