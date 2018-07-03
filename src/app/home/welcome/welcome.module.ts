import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
    WelcomeRoutingModule
  ],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
