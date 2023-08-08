import { Module } from '@nestjs/common';
import { SertficateService } from './sertficate.service';
import { SertficateController } from './sertficate.controller';
import { Sertficate } from './entities/sertficate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([Sertficate])],
  controllers: [SertficateController],
  providers: [SertficateService]
})
export class SertficateModule {}
