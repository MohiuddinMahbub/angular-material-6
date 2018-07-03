import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenav} from '@angular/material/sidenav';

export {MatSidenavModule, MatSidenav};

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatSidenavModule
  ],
  exports: [
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatSidenavModule
  ],
  declarations: []
})

export class MaterialModule { }
