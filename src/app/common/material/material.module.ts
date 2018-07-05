import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule
} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenav} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

export { 
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenav,
    MatIconModule
};

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatSidenavModule,
	MatExpansionModule,
	MatMenuModule,
	MatIconModule
  ],
  exports: [
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatSidenavModule,
	MatExpansionModule,
	MatMenuModule,
	MatIconModule
  ],
  declarations: []
})

export class MaterialModule { }
