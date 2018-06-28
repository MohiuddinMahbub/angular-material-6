import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './common/material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {routing} from "./app.routing";
import { Globals } from './common/globals';

@NgModule({
	
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent
	],

	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		routing,
		HttpClientModule
	],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	],

	providers: [Globals],

	bootstrap: [AppComponent]
})

export class AppModule { }
