import { Body, Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { RegisterRequest } from 'src/models/requests/register.request';
import { AuthService } from 'src/service/auth/auth.service';

@ApiTags('Api')
@Controller('api')
export class WebController {
  constructor(private readonly authService: AuthService) {}

  @Get('auth')
  @ApiOperation({ summary: 'Register account and user info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  async register(
    @Res() res,
    @Body() registerRequest: RegisterRequest,
  ): Promise<void> {
    try {
      const result = await this.authService.register(registerRequest);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json({ message: (e as Error).message });
    }
  }
}
