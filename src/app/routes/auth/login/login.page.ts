import { Component } from '@angular/core';
import { FooterComponent } from "../../../core/layout/footer/footer.component";
import { NameComponent } from "../../../shared/ui/button/action-button.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  imports: [FooterComponent, NameComponent],
})
export class LoginPage {}
