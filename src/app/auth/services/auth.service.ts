import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false; 
  private authKey: string = 'Video_course_token';

  login(key: string, value: string): void {
    window.localStorage.setItem(key, value);
    this.isLoggedIn = true;
  }

  logout(key: string = this.authKey): void {
    window.localStorage.removeItem(key);
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(key: string = this.authKey): string | null {
    return localStorage.getItem(key);
  }
}
