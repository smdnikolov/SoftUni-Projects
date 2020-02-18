import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient, private router: Router) {
    if (Object.values(window.localStorage).length) {
      this.isAuth = true;
      this.user = window.localStorage.getItem('username')
    }
  }

  isAuth: boolean;
  user: string;

  logIn(username, password) {
    let data = { username, password }
    let headers = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa('kid_rJ-8SzhjS:9ff9f7a5952842779c16be5198798170')}`,
        'Content-Type': 'application/json'
      },
    }
    this.http.post<any>('https://baas.kinvey.com/user/kid_rJ-8SzhjS/login', JSON.stringify(data), headers).subscribe((user: any) => {
      localStorage.setItem('authtoken', user._kmd.authtoken)
      localStorage.setItem('username', user.username)
      localStorage.setItem('creator', user._acl.creator)
      localStorage.setItem('loginSuccess', 'true')
      this.isAuth = true;
      this.user = user.username;
    }, err => {
      console.log(err)
      if (err.statusText === 'Unauthorized') {
        alert('Username or password was incorrect. Please try again.')
        //this.router.navigate(['not-logged-in'])
      } else {
        this.router.navigate(['could-not-log-you-in'])
        alert('Sorry, we could not log you in')
      }
    }, () => { this.router.navigate(['']) })
  }
  logOut() {
    let headers = {
      method: 'POST',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      },
    }
    this.http.post<any>('https://baas.kinvey.com/user/kid_rJ-8SzhjS/_logout', {}, headers).subscribe((res: any) => {

    }, err => {
      console.log(err)
      this.router.navigate(['could-not-log-you-оut'])
    }, () => {
      this.router.navigate([''])
      this.isAuth = false;
      this.user = undefined;
      window.localStorage.clear()
    })
  }
  register(username, password) {
    let data = { username, password }
    let headers = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa('kid_rJ-8SzhjS:9ff9f7a5952842779c16be5198798170')}`,
        'Content-Type': 'application/json'
      },
    }
    this.http.post<any>('https://baas.kinvey.com/user/kid_rJ-8SzhjS/', JSON.stringify(data), headers).subscribe((user: any) => {
      localStorage.setItem('authtoken', user._kmd.authtoken)
      localStorage.setItem('username', user.username)
      localStorage.setItem('creator', user._acl.creator)
      localStorage.setItem('registerSuccess', 'true')
      this.isAuth = true;
      this.user = user.username;
    }, err => {
      console.log(err)
      if (err.statusText === 'Conflict') {
        alert('Such user already exists! Please try with another one.')
        //this.router.navigate(['not-logged-in'])
      } else {
        this.router.navigate(['could-not-register-you'])
        alert('Sorry, we could not register you')
      }
    }, () => { this.router.navigate(['']) })
  }
}

