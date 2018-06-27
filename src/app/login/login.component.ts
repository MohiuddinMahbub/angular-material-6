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

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private logger: LoggerService
		) { 
	}

	onSubmit() {

		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		if(this.loginForm.controls.email.value == 'mahbub.hasan@naztech.us.com'
		 && this.loginForm.controls.password.value == 'password') {
		 
		 	this.logger.log(this.loginForm.controls.email.value + ' ' + this.loginForm.controls.password.value);

			this.router.navigate(['home']);
		}else {
			this.invalidLogin = true;
		}
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}
}
