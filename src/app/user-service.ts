import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get('/assets/DBUsers.json');
  }

  getUserByUsername(username: string) {
    return this.httpClient.get('/assets/DBUsers.json').pipe(
      map((obj: any) => obj.usersDB.filter((o: any) => o.username == username)),
      map((user) => user[0])
    );
  }

  checkUserWithPassword(creds: { username: string; password: string }) {
    // get logging user for db

    return this.getUserByUsername(creds.username).pipe(
      map((o: any) => {
        // check username and password are matched

        if (o && o.password === creds.password) {
          return o;
        } else {
          return null;
        }
      })
    );
  }
  
  getAllimages() {
    return this.httpClient.get('/assets/DBUsers.json');
  }
}
