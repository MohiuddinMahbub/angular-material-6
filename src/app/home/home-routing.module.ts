import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
        	{ 
        		path: '', redirectTo: 'welcome', pathMatch: 'prefix'
        	},
        	{
				    path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule'
        	}
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
