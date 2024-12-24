import { Component } from '@angular/core';
import { FooterComponent } from '../../../core/layout/footer/footer.component';
import { ActionButtonComponent } from '../../../shared/ui/button/action-button.component';
import { CheckBoxComponent } from '../../../shared/ui/checkbox/checkbox.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  imports: [FooterComponent, ActionButtonComponent, CheckBoxComponent],
})
export class LoginPage {}
