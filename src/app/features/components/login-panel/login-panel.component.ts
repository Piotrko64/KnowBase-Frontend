import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { BasicInputComponent } from 'app/shared/components/basic-input/basic-input.component';
import { PASSWORD_REGEXP } from '../../constants/passwordRegex';
import { AuthMode } from '../../types/enums/AuthMode.enum';

@Component({
  selector: 'auth-login-panel',
  standalone: true,
  imports: [
    BasicInputComponent,
    NgClass,
    NgFor,
    CommonModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule,
  ],
  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginPanelComponent implements OnInit {
  protected selectedAuthMode = signal(AuthMode.LOGIN);

  protected readonly authModes = AuthMode;
  protected readonly authTabsData = [
    { mode: AuthMode.LOGIN, title: 'Login' },
    { mode: AuthMode.REGISTER, title: 'Register' },
  ];

  protected authForm: FormGroup;

  protected switchMode(mode: AuthMode) {
    this.selectedAuthMode.set(mode);
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  login() {
    const { email, password } = this.getFormValue();

    this.authService.loginByEmailAndPassword(email, password);
  }

  register() {
    const { email, password, confirmPassword } = this.getFormValue();

    this.authService.registerByEmailAndPassword(
      email,
      password,
      confirmPassword,
    );
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.pattern(PASSWORD_REGEXP),
      ]),
      confirmPassword: this.fb.control(''),
    });
  }

  private getFormValue() {
    return this.authForm.value;
  }
}
