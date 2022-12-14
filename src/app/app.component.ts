import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_mentoring_program';
  
  constructor( private authService: AuthService) {
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
