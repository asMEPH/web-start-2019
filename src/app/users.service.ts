import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUsers() {
    return ['a','b','c'];
  }
}
