import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { MyJwtGuard } from 'src/auth/guard';

@Controller('user')
export class UserController {
  constructor() {}
  //path : .../users/me
  //   @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('me')
  me(@GetUser() user: User) {
    //console.log(request.user) //where is it come from ?
    return user;
  }
}
