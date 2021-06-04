import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { MemberRepository } from './member.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MemberRepository])],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
