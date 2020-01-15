import { User } from './user';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User[] = [
    { username: 'michaelBruce', password: 'michael123' },
    { username: 'rickGrimes', password: 'rick123' },
    { username: 'asd', password: 'asd' }
  ];

  loggedInUserSubject = new ReplaySubject<string>();

  constructor() {
   }

  getUsers() {
    return this.user.slice();
  }
}
