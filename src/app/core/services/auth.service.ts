import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

interface IAccountValue {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accountValue = signal<IAccountValue | null>(null);

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
      }>('/api/auth/login', { email, password })
      .subscribe((value) => {
        this.accountValue.set({ token: value.token });
      });
  }

  public registerByEmailAndPassword(
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    this.http
      .post(
        '/api/auth/register',
        {
          email,
          password,
          confirmPassword,
        },
        { responseType: 'text' },
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
