import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApplicationEventService } from './eventEmit-Service';
import { UserData } from './interface';
import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sridhar';
  public _destroyed$ = new Subject();
  activeId: string = '1';
  userData: any;
  userName: string = 'Guest';
  buttonText: string = 'login';
  isAuthenticated: boolean = false;
  cartData: number = 0;
  hideadmin: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private applicationEventService: ApplicationEventService
  ) {}

  ngOnInit() {
    this.applicationEventService.appEvent$
      .pipe(takeUntil(this._destroyed$))
      .subscribe((event) => {
        switch (event.name) {
          case 'USER_LOGIN_SUCEESS': {
            this.userData = event.value;
            this.buttonText = 'Logout';
            this.userName = event.value.name;
            this.isAuthenticated = true;
            return;
          }
          default:
            break;
        }
      });
  }
  loginorOut() {
    if (this.buttonText == 'Logout') {
      this.router.navigate(['login']);
      this.buttonText = 'login';
      this.userName = 'Guest';
      this.isAuthenticated = false
    } else {
      localStorage.clear()
      this.router.navigate(['login']);
    }
  }
}
