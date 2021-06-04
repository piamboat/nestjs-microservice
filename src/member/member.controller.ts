import { Controller } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member-dto';
import { Member } from './member.entity';
import { GetMemberDto } from './dto/get-member-dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @MessagePattern('create-member')
  createMember(createMemberDto: CreateMemberDto): Promise<Member> {
    return this.memberService.createMember(createMemberDto);
  }

  @MessagePattern('get-members')
  getMembers(getMemberDto: GetMemberDto): Promise<Member[]> {
    return this.memberService.getMembers(getMemberDto);
  }
}
