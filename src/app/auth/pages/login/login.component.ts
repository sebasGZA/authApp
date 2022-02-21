import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';
import Swal from 'sweetalert2'

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authSvc: AuthService
  ) { }

  login() {
    // this.authSvc.validarToken().subscribe(console.log)
    const { email, password } = this.miFormulario.value
    this.authSvc.logIn(email, password).subscribe(ok => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error')
      }
    })
  }

}
