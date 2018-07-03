import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '../common/material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
    ],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],

    declarations: [HomeComponent, SidebarComponent, HeaderComponent]
})
export class HomeModule {}
