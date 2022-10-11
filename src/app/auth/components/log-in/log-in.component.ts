import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  form!: FormGroup;

  constructor(private auth: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    this.auth.login(this.form.value.email, this.form.value.password)
    console.log('Logged in successfully!')
    this.router.navigate(['/courses/list']);
  }

  private buildForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
