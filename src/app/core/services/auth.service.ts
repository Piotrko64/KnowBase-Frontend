import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IAccountValue {
  token: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accountValue = new BehaviorSubject<IAccountValue | null>(null);

  constructor(
    private socialAuthService: SocialAuthService,
    private http: HttpClient,
  ) {}

  public loginViaGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public loginByEmailAndPassword(email: string, password: string) {
    this.http
      .post<{
        token: string;
      }>('http://localhost:5271/auth/login', { email, password })
      .subscribe((value) => {
        console.log(value.token);
        this.accountValue.next({ name: '', token: value.token });
      });
  }
}
