import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  public LogOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  public redirectToLogin(): void {
    this.router.navigate(['/auth']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  } 
}
