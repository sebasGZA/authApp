import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { authResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpSvc: HttpClient) { }

  logIn(email: string, password: string): Observable<authResponse> {
    const baseUrl = `${environment.baseUrl}/auth`
    const body = { email, password }
    return this.httpSvc.post<authResponse>(baseUrl, body)
  }
}
