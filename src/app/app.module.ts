import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { Globals } from './common/globals';


import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';

@NgModule({
	
	declarations: [
		AppComponent
	],

	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule
	],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],

	providers: [Globals, AuthGuard],

	bootstrap: [AppComponent]
})

export class AppModule { }
