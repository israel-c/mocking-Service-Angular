import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin(){
    console.log('Needs login');
    console.log(!this.authService.isAuthenticated());
    console.log('*****')
    return !this.authService.isAuthenticated();
  }

}
