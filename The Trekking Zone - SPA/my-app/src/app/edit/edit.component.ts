import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service'
import { TreksService } from '../treks.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-trek',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  constructor(private service: UserService, private treksService: TreksService, private router: Router) { }

  trektoEdit: any;
  regex = {
    inputRegex: /[0-9a-zA-Z]{6,}/,
    dateRegex: /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
    imageURLRegex: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    emailRegex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  }
  editForm = new FormGroup({
    location: new FormControl('', Validators.required),
    dateTime: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  @ViewChild('editForm') form: NgForm

  ngOnInit() {
    this.treksService.getTrek(window.localStorage.getItem('trekId')).subscribe((data) => {
      window.localStorage.setItem('editSuccess','true')
      this.trektoEdit = data
      this.editForm.setValue({ location: `${this.trektoEdit.location}`, dateTime: `${this.trektoEdit.dateTime}`, description: `${this.trektoEdit.description}`, imageURL: `${this.trektoEdit.imageURL}`, email: `${this.trektoEdit.email}` })
    }, (err) => {
      if (err.statusText === 'Unauthorized') {
        alert('You should be logged in to view this page!')
        this.router.navigate(['not-logged-in'])
      } else {
        alert('Sorry we could not load this trek')
        this.router.navigate(['could-not-load-trek'])
      }
    });
  }
  
  get loggdIn() { return window.localStorage.getItem('username'); }
  editMyTrek() {

    let organizer: string = this.trektoEdit.organizer;
    let location: string = this.editForm.value.location;
    let dateTime: string = this.editForm.value.dateTime;
    let imageURL: string = this.editForm.value.imageURL;
    let description: string = this.editForm.value.description;
    let email: string = this.editForm.value.email
    let likes: number = this.trektoEdit.likes
    let data = { location, dateTime, imageURL, description, organizer, likes, email }

    this.treksService.putTrek(localStorage.getItem('trekId'), data).subscribe(() => {
      this.router.navigate([`details/${this.trektoEdit._id}`])
    }, (err) => {
      if (err.statusText === 'Unauthorized') {
        alert('You should be logged in to view this page!')
        this.router.navigate(['not-logged-in'])
      } else {
        alert('Sorry we could not register your like')
        this.router.navigate(['could-not-like-trek'])
      }
    })
  }
}
