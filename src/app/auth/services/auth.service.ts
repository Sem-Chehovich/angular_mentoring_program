import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authKey: string = 'Video_course_token';

  login(user: string, password: string): void {
    localStorage.setItem(this.authKey , JSON.stringify({ user, password }));
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey)? true : false;
  }

  getUserInfo(key: string): string | null {
    return localStorage.getItem(key);
  }
}
