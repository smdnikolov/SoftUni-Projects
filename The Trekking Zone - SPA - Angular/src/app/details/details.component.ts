import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  
  constructor(private treksService: TreksService, private router: Router, ) { }

  trek: any;
  trekId: string;

  ngOnInit() {
    let messageBox = document.getElementById('success');
    this.trekId = window.localStorage.getItem('trekId');

    if (this.editSuccess) {
      messageBox.textContent = 'You have successfully edited the trek.'
      setTimeout(() => {
        window.localStorage.setItem('editSuccess', '')
        if (messageBox !== null) {
          messageBox.style.visibility = "hidden"
        }
      }, 3000)
    } else {
      document.getElementById('success').style.visibility = "hidden"
    }

    if (this.trekId === '') {
      alert('There is no such trek!')
      this.router.navigate(['trek-not-found'])
    }

    this.treksService.getTrek(this.trekId).subscribe((data) => {
      this.trek = data;
    }, (err) => {
      if (err.statusText === 'Unauthorized') {
        this.router.navigate(['not-logged-in'])
      } else {
        alert('Sorry we could not load this trek')
        this.router.navigate(['could-not-load-trek'])
      }
    })
  }

  get editSuccess() { return window.localStorage.getItem('editSuccess') }
  get loggdIn() { return window.localStorage.getItem('username'); }
  editTrek() { this.router.navigate([`edit/${this.trekId}`]); }
  deleteTrek() {
    this.treksService.deleteTrek(this.trek._id).subscribe(() => {
      this.trek = undefined;
      localStorage.setItem('trekId', '')
      localStorage.setItem('deleteSuccess', 'true')
      this.router.navigate([''])
    }, (err) => {
      if (err.statusText === 'Unauthorized') {
        alert('You should be logged in to view this page!')
        this.router.navigate(['not-logged-in'])
      } else {
        alert('Sorry we could not delete this trek')
        this.router.navigate(['could-not-delete-trek'])
      }
    })
  }
  likeTrek() {
    const organizer: string = this.trek.organizer;
    const location: string = this.trek.location;
    const dateTime: string = this.trek.dateTime;
    const imageURL: string = this.trek.imageURL;
    const description: string = this.trek.description;
    const email: string = this.trek.email;
    let likes: number = this.trek.likes;
    likes++;
    const data = { location, dateTime, imageURL, description, organizer, likes, email };
    this.treksService.putTrek(localStorage.getItem('trekId'), data).subscribe(() => {
      document.querySelector("body > app-root > app-details > div > div > div.overflow-hidden.my-3.p-3 > p:nth-child(5)").textContent = `Likes: ${likes++}`;
      document.querySelector("#like").textContent = 'Trek Liked !'
      document.querySelector("#like").setAttribute('disabled', 'disabled');
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

