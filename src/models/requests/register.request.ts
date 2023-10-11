import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
  @ApiProperty({ description: 'Account Nickname', nullable: false })
  nickname: string;

  @ApiProperty({ description: 'Account Email', nullable: false })
  email: string;

  @ApiProperty({ description: 'Account Password', nullable: false })
  password: string;

  @ApiProperty({ description: 'User First Name', nullable: false })
  firstName: string;

  @ApiProperty({ description: 'User Last Name', nullable: false })
  lastName: string;

  @ApiProperty({ description: 'User Birth Day', nullable: false })
  birthday: Date;

  @ApiProperty({ description: 'User gender', nullable: false })
  gender: 'man' | 'woman';
}
