import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { DexieService } from '../../shared/services/dexie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
  providers: [
    DexieService,
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
