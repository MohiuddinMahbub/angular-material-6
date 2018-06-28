import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule
  ],
  exports: [
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule
  ],
  declarations: []
})

export class MaterialModule { }
