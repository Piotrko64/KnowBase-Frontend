import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {  signInWithRedirect } from 'aws-amplify/auth'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Amplify } from 'aws-amplify';
import { Hub} from '@aws-amplify/core'
import { SignUpInput, SignUpOutput, signUp } from 'aws-amplify/auth';
interface IAccountValue {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accountValue = signal<IAccountValue | null>(null);

  constructor(

    private http: HttpClient,
  ) {}

  public async loginViaGoogle() {

await signInWithRedirect ({
        provider: 'Google'
      });
    
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
