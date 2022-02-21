import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authSvc: AuthService) { }

  login() {
    const { email, password } = this.miFormulario.value
    this.authSvc.logIn(email, password).subscribe(resp => {
      console.log(resp)
    })
    // this.router.navigateByUrl('/dashboard')
  }

}
