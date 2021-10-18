import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApplicationEventService } from '../eventEmit-Service';
import { IApplicationEvent, UserData } from '../interface';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit,OnDestroy {
  public _destroyed$ = new Subject();
  public userData: UserData = {} as UserData;
  public showerror: boolean = false;
  public PasswordError: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private applicationEventService: ApplicationEventService
  ) {}

  ngOnInit(): void {
    this.showerror = false;
  }

  login() {
    const event: IApplicationEvent = {
      name: this.userData.name,
      component: 'HomeQqRatingNoteLinksComponent',
      value: this.userData,
  };
  
  
    if (
      this.userData.name === undefined ||
      this.userData.name === '' ||
      this.userData.password === undefined ||
      this.userData.password === ''
    ) {
      this.PasswordError = true;
    } else {
      this.PasswordError = false;
     
      this.userService
        .checkUserWithPassword({
          username: this.userData.name,
          password: this.userData.password,
        })
        .subscribe((user: any) => {
          if (user != null) {
            this.showerror = false;
            localStorage.setItem('user',user);
            this.router.navigate(['/']);
            const event: IApplicationEvent = {
              name: 'USER_LOGIN_SUCEESS',
              component: 'LoginComponent',
              value: this.userData,
          };
          this.applicationEventService.emitAnEvent(event);
          } else {
            this.showerror = true;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
