import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  form!: FormGroup;
  private authKey: string = 'Video_course_token';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    this.auth.login(this.authKey, this.form.value.email)
    console.log('Logged in successfully!')
  }

  private buildForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
