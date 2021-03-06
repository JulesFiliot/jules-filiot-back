import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneUserByName(username);

    if (user && user.password === password) {
      delete user['password'];
      return user;
    }

    return null;
  }
}