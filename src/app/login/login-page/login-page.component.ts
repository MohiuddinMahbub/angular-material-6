import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";


/*Service classes*/
import {ServerService} from '../../service/server.service';
import { LoggerService } from '../../service/logger.service';

import { WebDbService } from '../../shared/services/web-db.service';

/*Common files*/
import { Globals } from '../../common/globals';
import { SOURCE, DESTINATION, CCY_CODES } from '../../common/constants';
import { ACTION_TYPE } from '../../common/action-type';
import { CONTENT_TYPE } from '../../common/content-type';

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
		private logger: LoggerService,
		private globals: Globals,
		private serverService: ServerService,
		private dbService: WebDbService
		) { 
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	doLogin() {

		console.log('login clicked.');
		
		localStorage.setItem('isLoggedin', 'true');

		this.router.navigate(['about']);
		
		this.getBanks();

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

	getRecipients(){

		let jsonString = {
			header: {
				userId: 100000,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_TYPE_SELECT_BEN_TXN_SUMMARY,
				contentType: CONTENT_TYPE.CONTENT_TYPE_TRANSACTION,
				destination: DESTINATION,
				secretId: this.globals.guid()
			},
			payload: {
				customerId: 1181
			}
		}
		
		this.serverService.dispatcher(jsonString).subscribe(
		   data => {				
				console.log(data.payload[1].payload);
		   },
		   error => {
				this.logger.error(error);
		   }
		);
  	}

  	getBanks(){

		let jsonString = {
			header: {
				userId: 100000,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_TYPE_SELECT_BANK_MOBILE,
				contentType: CONTENT_TYPE.CONTENT_TYPE_BANK,
				destination: DESTINATION,
				secretId: this.globals.guid()
			},
			payload: {}
		}
		
		this.serverService.dispatcher(jsonString).subscribe(
		   data => {

				//console.log(data.payload[1].payload);

		   		let db = 'indexedDB';
		   		let tableName = 'T_BANK';

		   		this.dbService.addAll(db, 'T_BANK', data.payload[1].payload);

				sessionStorage.setItem(tableName, JSON.stringify(data.payload[1].payload));
				localStorage.setItem(tableName, JSON.stringify(data.payload[1].payload));
		   },
		   error => {
				this.logger.error(error);
		   }
		);
  	}
}
