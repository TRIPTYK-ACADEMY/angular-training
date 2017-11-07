import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: string[];
  getUserAdmin(): string {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }
  constructor() {
    this.users = ['gilles', 'vincent', 'joelle', 'philippe', 'guiullaume', 'nadine'];
  }

}
