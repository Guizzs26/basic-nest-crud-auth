import { Module } from '@nestjs/common';

import { User } from './entities/user';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
