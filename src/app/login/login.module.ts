import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../common/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    imports: [
	    CommonModule,
		LoginRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],

    declarations: [LoginComponent, HeaderComponent, SidebarComponent]
})
export class LoginModule {}
