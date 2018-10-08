import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, public router: Router) { }

  testForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  async loginSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('Under Component', this.testForm.value);
    try {
      const signinSuccess = await this.authService.signin(this.testForm.value);
      if (signinSuccess) {
        console.log('Sucessfully Signin', signinSuccess);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
}
