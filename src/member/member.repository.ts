import { EntityRepository, Repository } from 'typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from './dto/create-member-dto';
import { GetMemberDto } from './dto/get-member-dto';

@EntityRepository(Member)
export class MemberRepository extends Repository<Member> {
  async createMember(createMemberDto: CreateMemberDto): Promise<Member> {
    const { firstname, lastname } = createMemberDto;

    const member = this.create();
    member.firstname = firstname;
    member.lastname = lastname;

    await member.save();
    return member;
  }

  async getMembers(getMemberDto: GetMemberDto): Promise<Member[]> {
    const { firstname, lastname } = getMemberDto;
    const query = this.createQueryBuilder('member');

    if (firstname) {
      query.andWhere('(member.firstname LIKE :firstname)', {
        firstname: `%${firstname}%`,
      });
    }

    if (lastname) {
      query.andWhere('(member.lastname LIKE :lastname)', {
        lastname: `%${lastname}%`,
      });
    }

    const members = await query.getMany();
    return members;
  }
}
