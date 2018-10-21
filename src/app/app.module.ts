import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form/test-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestFormComponent,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
