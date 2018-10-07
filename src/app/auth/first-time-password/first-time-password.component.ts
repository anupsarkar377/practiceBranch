import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-first-time-password',
  templateUrl: './first-time-password.component.html',
  styleUrls: ['./first-time-password.component.css']
})
export class FirstTimePasswordComponent implements OnInit {
  firstTimePasswordForm = this.fb.group({
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('Under Component', this.firstTimePasswordForm.value);
    try {
      const signinSuccess = await this.authService.confirmSignin(this.firstTimePasswordForm.value);
      if (signinSuccess) {
        console.log('Sucessfully Password Updated', signinSuccess);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  ngOnInit() {
  }

}
