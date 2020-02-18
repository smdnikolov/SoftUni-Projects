import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  loginRegex = /[0-9a-zA-Z]{6,}/;
  regForm: FormGroup

  @ViewChild('regForm') form: NgForm;
  
  get loggdIn() { return window.localStorage.getItem('username'); }
  registerHandler(form) { this.userService.register(form.username, form.passwords.password) };
  isLoggedRedirect() { this.router.navigate(['already-logged-in']); return true; }
}
