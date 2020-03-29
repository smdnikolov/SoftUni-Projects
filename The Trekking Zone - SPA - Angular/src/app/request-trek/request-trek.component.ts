import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../user.service'
import { TreksService } from '../treks.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-request-trek',
  templateUrl: './request-trek.component.html',
  styleUrls: ['./request-trek.component.css']
})

export class RequestTrekComponent {

  constructor(private service: UserService, private treksService: TreksService, private router: Router) { }

  reqForm: FormGroup;
  regex = {
    inputRegex: /[0-9a-zA-Z]{6,}/,
    dateRegex: /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
    imageURLRegex: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    emailRegex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  }

  @ViewChild('reqForm') form: NgForm;

  get loggdIn() { return window.localStorage.getItem('username'); };
  notLoggedRedirect() { this.router.navigate(['not-logged-in']); return true; };
  requestHandler() {
    let organizer = this.service.user;
    let location = this.form.value.location;
    let dateTime = this.form.value.dateTime;
    let imageURL = this.form.value.imageURL;
    let description = this.form.value.description;
    let email = this.form.value.email
    let data = { location, dateTime, imageURL, description, organizer, likes: 0, email }
    this.treksService.postTreks(data)
  };
}
