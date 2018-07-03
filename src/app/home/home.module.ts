import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent, WelcomeComponent, SidebarComponent, HeaderComponent]
})
export class HomeModule {}
