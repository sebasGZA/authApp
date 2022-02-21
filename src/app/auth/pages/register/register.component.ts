import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authSvc: AuthService
  ) { }

  registro() {
    const { name, email, password } = this.miFormulario.value
    this.authSvc.registro(name, email, password).subscribe(ok => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error')
      }
    })
  }
}
