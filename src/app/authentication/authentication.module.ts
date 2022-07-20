import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegistorComponent
  ]
})
export class AuthenticationModule { }
