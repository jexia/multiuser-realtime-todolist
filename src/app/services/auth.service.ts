import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JexiaService } from './jexia.service';
import { SignUpResponseObject,
  SignUpRequestObject,
  AuthenticateUMSRequestObject,
  AuthenticateUMSResponseObject,
  UserProfileRequestObject,
  UserResponseObject,
  UserProfileResponseObject } from '../interfaces/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dataset = `${this.jexiaService.base}/ds/users`;

  constructor(
    private http: HttpClient,
    private jexiaService: JexiaService
  ) { }

  getHeaders() {
    return new HttpHeaders().append('Authorization', `Bearer ${this.jexiaService.getAccessToken()}`);
  }

  signUp(user: SignUpRequestObject) {
    return this.http.post<SignUpResponseObject>(`${this.jexiaService.base}/ums/signup`, user);
  }


  setProfile(profile: UserProfileRequestObject, update: boolean) {
    const headers = this.getHeaders();
    const params = new HttpParams().append('cond', `[{"field":"user_id"},"=","${profile.user_id}"]`);
    const post = this.http.post<UserProfileRequestObject>(this.dataset, profile, {headers});
    const patch = this.http.patch<UserProfileRequestObject>(this.dataset, profile, {headers, params});
    return update ? patch : post;
  }

  authenticate(user: AuthenticateUMSRequestObject) {
    user = {...user, method: 'ums'};
    return this.http.post<AuthenticateUMSResponseObject>(`${this.jexiaService.base}/auth`, user)
    .pipe(tap(res => this.jexiaService.setAccessToken(res.access_token)));
  }

  getUser() {
    const headers = this.getHeaders();
    return this.http.get<UserResponseObject>(`${this.jexiaService.base}/ums/user`, {headers});
  }

  getUsers() {
    const headers = this.getHeaders();
    return this.http.get<UserProfileResponseObject[]>(this.dataset, {headers});
  }

  getUserProfile(userId: string) {
    const headers = this.getHeaders();
    const params = new HttpParams().append('cond', `[{"field":"user_id"},"=","${userId}"]`);
    return this.http.get<any[]>(this.dataset, {headers, params});
  }


  signOut() {
    this.jexiaService.removeAccessToken();
  }
}
