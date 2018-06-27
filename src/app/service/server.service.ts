import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, forkJoin, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
	
import { Constants, SERVER_URL } from '../common/constants';

import {ConfigService} from '../service/config.service'
import { LoggerService } from '../service/logger.service';

const httpOptions = {
	headers: new HttpHeaders({ 
		'Content-Type': 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})
export class ServerService {
		
	constructor(
	  	private http:HttpClient,
		private logger: LoggerService,
		private configService: ConfigService
	) { }

	/*Dispataches single request to server*/
	public dispatcher(arg){
		let body = JSON.stringify(arg);

		return this.http.post<any>(SERVER_URL, body, httpOptions)
		.pipe(
			retry(3), // retry a failed request up to 3 times
			catchError(this.logger.handleError) // then handle the error
		)
	};

	/*Dispataches two concurrent request to server*/
	public biDispatcher(arg1, arg2){

		let body1 = JSON.stringify(arg1);
		let body2 = JSON.stringify(arg2);
		
		let req1 = this.http.post<any>(SERVER_URL, body1, httpOptions).pipe(
				retry(3), // retry a failed request up to 3 times
				catchError(this.logger.handleError) // then handle the error
			);

		let req2 = this.http.post<any>(SERVER_URL, body2, httpOptions)
			.pipe(
				retry(3), // retry a failed request up to 3 times
				catchError(this.logger.handleError) // then handle the error
			);

		return forkJoin(req1, req2);
	};
	
	/*Dispataches multiple request to server*/
	public multiDispatcher(...args){

		let requests = [];
		let list: Array<string> = args[0];

		for (var i = list.length - 1; i >= 0; i--) {			
			requests[i] = this.http.post<any>(SERVER_URL, JSON.stringify(list[i]), httpOptions)
				.pipe(retry(3), // retry a failed request up to 3 times
					catchError(this.logger.handleError) // then handle the error
				);
		}		

		return forkJoin(requests);
	};
}
