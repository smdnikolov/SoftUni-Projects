import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITreks } from './interfaces/trek.js';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class TreksService {

  constructor(private http: HttpClient, private router: Router) { }

  treks: ITreks[];
  trek: ITreks;

  getTreks() {
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      }
    };
    return this.http.get<ITreks[]>('https://baas.kinvey.com/appdata/kid_rJ-8SzhjS/treks', headers)
  }
  getTrek(id) {
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      }
    };
    return this.http.get<ITreks>(`https://baas.kinvey.com/appdata/kid_rJ-8SzhjS/treks/${id}`, headers)
  }
  deleteTrek(id) {
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      }
    };
    return this.http.delete<any>(`https://baas.kinvey.com/appdata/kid_rJ-8SzhjS/treks/${id}`, headers)
  }
  putTrek(id, data: { location: any; dateTime: any; imageURL: any; description: any; organizer: string; likes: number; email: string; }) {
    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      },
    };
    return this.http.put<any>(`https://baas.kinvey.com/appdata/kid_rJ-8SzhjS/treks/${id}`, JSON.stringify(data), headers)
  }
  postTreks(data: { location: any; dateTime: any; imageURL: any; description: any; organizer: string; likes: number; email: string; }) {
    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      },
    }
    this.http.post<any>('https://baas.kinvey.com/appdata/kid_rJ-8SzhjS/treks', JSON.stringify(data), headers).subscribe((x) => {
      localStorage.setItem('requestSuccess','true')
    }, err => {
      console.log(err)
      if (err.statusText === 'Unauthorized') {
        this.router.navigate(['not-logged-in'])
      } else {
        this.router.navigate(['could-send-trek'])
      }
    }, () => this.router.navigate(['']))
  }
}
