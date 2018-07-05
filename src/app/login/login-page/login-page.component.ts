import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

import { LoggerService } from '../../service/logger.service';
import { Globals } from '../../common/globals';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
    animations: [routerTransition()]
})
export class LoginPageComponent implements OnInit {

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

		this.router.navigate(['about']);

		/*this.submitted = true;

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
