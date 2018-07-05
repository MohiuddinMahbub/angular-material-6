import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
        children: [
        	{ 
        		path: '', redirectTo: 'login', pathMatch: 'prefix'
        	},
        	{
				path: 'login', loadChildren: './login-page/login-page.module#LoginPageModule'
        	},
            {
                path: 'about', loadChildren: './about/about.module#AboutModule'
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
export class LoginRoutingModule {}
