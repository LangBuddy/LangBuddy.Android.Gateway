import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({ description: 'Account Email', nullable: false })
  email: string;

  @ApiProperty({ description: 'Account Password', nullable: false })
  password: string;
}
