import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'
import { TreksService } from '../../treks.service'
import { ITreks } from 'src/app/interfaces/trek';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public userService: UserService, private treksService: TreksService, private router: Router) { }

  treks: ITreks[];

  ngOnInit() {
    let messageBox = document.getElementById('success')
    if (this.loginSuccess === 'true') {
      messageBox.textContent = 'You have successfully logged in.'
      setTimeout(() => {
        window.localStorage.setItem('loginSuccess', '')
        if (messageBox !== null) {
          messageBox.style.visibility = "hidden"
        }
      }, 3000)
    } else if (this.registerSuccess === 'true') {
      messageBox.textContent = 'You have successfully registered and logged in.'
      setTimeout(() => {
        window.localStorage.setItem('registerSuccess', '')
        if (messageBox !== null) {
          messageBox.style.visibility = "hidden"
        }
      }, 3000)
    } else if (this.requestSuccess === 'true') {
      messageBox.textContent = 'You have successfully requested a trek.'
      setTimeout(() => {
        window.localStorage.setItem('requestSuccess', '')
        if (messageBox !== null) {
          messageBox.style.visibility = "hidden"
        }
      }, 3000)
    } else if (this.deleteSuccess === 'true') {
      messageBox.textContent = 'You have successfully deleted the trek.'
      setTimeout(() => {
        window.localStorage.setItem('deleteSuccess', '')
        if (messageBox !== null) {
          messageBox.style.visibility = "hidden"
        }
      }, 3000)
    } else {
      document.getElementById('success').style.visibility = "hidden"
    }
    if (this.userService.isAuth) {
      this.treksService.getTreks().subscribe((data) => {
        this.treks = data
      }, (err) => {
        if(err.statusText==='Unauthorized'){
          this.router.navigate([''])
        }
        alert('Sorry we could not load any treks')
        this.router.navigate(['could-not-load-treks'])
      })
    }
  }

  get loginSuccess() { return window.localStorage.getItem('loginSuccess') }
  get registerSuccess() { return window.localStorage.getItem('registerSuccess') }
  get requestSuccess() { return window.localStorage.getItem('requestSuccess') }
  get deleteSuccess() { return window.localStorage.getItem('deleteSuccess') }
  selectTrekHandler(trek: ITreks) { localStorage.setItem('trekId', `${trek._id}`); this.router.navigate([`details/${trek._id}`]) }
}
