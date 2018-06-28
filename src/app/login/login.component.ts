import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

import { LoggerService } from '../service/logger.service';
import { Globals } from '../common/globals';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

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

		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		this.username = this.loginForm.controls.username.value;
		this.password = this.loginForm.controls.password.value;

		if(this.username == 'mahbub.hasan@naztech.us.com'
		 && this.loginForm.controls.password.value == 'password') {
		 
		 	this.logger.log(this.loginForm.controls.username.value + ' ' + this.loginForm.controls.password.value);

			this.router.navigate(['home']);
		}else {
			this.invalidLogin = true;
		}
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}
}
