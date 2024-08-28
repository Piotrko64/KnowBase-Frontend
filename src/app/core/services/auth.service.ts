import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
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

  constructor(private socialAuthService: SocialAuthService) {}

  public loginViaGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
