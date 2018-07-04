import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

import { LoggerService } from '../service/logger.service';
import { Globals } from '../common/globals';
import { routerTransition } from '../router.animations';
import { MatSidenav } from '../common/material/material.module';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  } 

    config = {
    panels: [
      { name: 'Section 1', description: 'First section' },
      { name: 'Section 2', description: 'Second section' },
      { name: 'Section 3', description: 'Third section' }
    ]
  };
  
	loginForm: FormGroup;
	submitted: boolean = false;
	invalidLogin: boolean = false;

	private username: string;
	private password: string;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private logger: LoggerService
		) { 
	}

	doLogin() {

		console.log('login clicked.');
		
		localStorage.setItem('isLoggedin', 'true');

/*		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		this.username = this.loginForm.controls.username.value;
		this.password = this.loginForm.controls.password.value;

		if(this.username == 'mahbub.hasan@naztech.us.com' && this.password == 'password') {
		 
		 	this.logger.log(this.username + ' ' + this.password);

			this.router.navigate(['home']);
		}else {
			this.invalidLogin = true;
		}*/
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}
}
