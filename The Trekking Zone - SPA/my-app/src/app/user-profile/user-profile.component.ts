import { Component, OnInit } from '@angular/core';
import { TreksService } from '../treks.service';
import { Router } from '@angular/router';
import { ITreks } from '../interfaces/trek';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor(private treksService: TreksService, private router: Router) { }

  treks: ITreks[];

  ngOnInit() {
    this.treksService.getTreks().subscribe((data) => {
      this.treks = data.filter(x => x.organizer === this.username);
    }, (err) => {
      if (err.statusText === 'Unauthorized') {
        this.router.navigate(['not-logged-in'])
      } else {
        alert('Sorry we could not load your treks')
        this.router.navigate(['could-not-load-your-treks'])
      }
    })
  }

  get username() { return localStorage.getItem('username') };
  addButton(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    localStorage.setItem('trekId', idAttr.value)
    this.router.navigate([`details/${idAttr.value}`])
  }
};