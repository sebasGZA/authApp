import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/sevices/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [

    `
    *{
      margin:15px
    }
    
    `
  ]
})
export class DashboardComponent {

  get usuario() {
    return this.AuthService.usuario
  }

  constructor(private router: Router, private AuthService: AuthService) { }

  logOut() {
    this.router.navigateByUrl('/auth')
    this.AuthService.logOut()
  }

}
