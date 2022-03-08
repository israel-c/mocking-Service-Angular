import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean{
    let authenticate = !localStorage.getItem('tokenAuth');
    return authenticate;
  }
}
