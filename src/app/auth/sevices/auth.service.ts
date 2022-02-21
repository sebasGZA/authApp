import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { authResponse, Usuario } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl
  private _usuario!: Usuario

  get usuario() {
    return { ... this._usuario }
  }

  constructor(private httpSvc: HttpClient) { }

  logIn(email: string, password: string) {
    const baseUrl = `${this._baseUrl}/auth`
    const body = { email, password }
    return this.httpSvc.post<authResponse>(baseUrl, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(false))
      )
  }
}
