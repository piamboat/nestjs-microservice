import { Module } from '@nestjs/common';
import { RocketModule } from './rocket/rocket.module';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RocketModule, MemberModule],
})
export class AppModule {}
