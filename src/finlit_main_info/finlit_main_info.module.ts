import { Module } from '@nestjs/common';
import { FinlitMainInfoService } from './finlit_main_info.service';
import { FinlitMainInfoController } from './finlit_main_info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinlitMainInfo } from './entities/finlit_main_info.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FinlitMainInfo])],
  controllers: [FinlitMainInfoController],
  providers: [FinlitMainInfoService]
})
export class FinlitMainInfoModule {}
