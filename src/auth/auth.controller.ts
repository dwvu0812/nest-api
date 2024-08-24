import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() authDTO: AuthDTO) {
    console.log('Check ~ AuthController ~ register ~ body:', authDTO);
    return this.authService.register();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
