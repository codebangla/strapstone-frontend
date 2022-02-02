import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    // const token = this.authService.authUser(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
        (response: any) => {
            console.log(response);
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('userName', user.userName);
                this.alertify.success('Login Successful');
                this.router.navigate(['/']);
            }
        }
    );
}

}
