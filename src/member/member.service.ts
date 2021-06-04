import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberRepository } from './member.repository';
import { CreateMemberDto } from './dto/create-member-dto';
import { Member } from './member.entity';
import { GetMemberDto } from './dto/get-member-dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository,
  ) {}

  async createMember(createMemberDto: CreateMemberDto): Promise<Member> {
    return this.memberRepository.createMember(createMemberDto);
  }

  async getMembers(getMemberDto: GetMemberDto): Promise<Member[]> {
    return this.memberRepository.getMembers(getMemberDto);
  }
}
