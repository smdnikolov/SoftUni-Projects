import { Component, ViewChild, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  loginRegex = /[0-9a-zA-Z]{6,}/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  loginForm: FormGroup;

  @ViewChild('loginForm') form: NgForm;
  
  get loggdIn() { return window.localStorage.getItem('username'); };
  loginHandler(form: { username: string; password: string; }) { this.userService.logIn(form.username, form.password) };
  isLoggedRedirect() { this.router.navigate(['already-logged-in']); return true; };
}

