import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
})
export class ReportsModule {}
