import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterRequest } from 'src/models/requests/register.request';
import { HttpResponse } from 'src/models/responses/http.response';
import { AuthService } from 'src/service/auth/auth.service';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
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
      const result = await this.authService.registration(registerRequest);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json(new HttpResponse(false, (e as Error).message, null));
    }
  }
}
