import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Config } from '../interface/config';

import { LoggerService } from '../service/logger.service';

/*Others*/
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const configUrl = '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

	config: Config;
	headers: string[];

	constructor(
		private http:HttpClient,
		private logger: LoggerService
	) { }

	getConfig() {
		// now returns an Observable of Config
		return this.http.get<Config>(configUrl)
		.pipe(
			retry(3), // retry a failed request up to 3 times
			catchError(this.logger.handleError) // then handle the error
		);
	};

	getConfigResponse(): Observable<HttpResponse<Config>> {
		return this.http.get<Config>( configUrl, { observe: 'response' })
		.pipe(
			retry(3), // retry a failed request up to 3 times
			catchError(this.logger.handleError) // then handle the error
		);
	};

	showConfig() {
	  this.getConfig()
		// clone the data object, using its known Config shape
		.subscribe((data: Config) => this.config = { ...data });
		error => this.logger.error(error)//this.error = error // error path
	}

	showConfigResponse() {
		this.getConfigResponse()
			// resp is of type `HttpResponse<Config>`
			.subscribe(resp => {
			// display its headers
			const keys = resp.headers.keys();
			this.headers = keys.map(key =>
			`${key}: ${resp.headers.get(key)}`);

			// access the body directly, which is typed as `Config`.
			this.config = { ... resp.body };

			console.log('Headers: ', this.headers);
			console.log('Config values: {}', this.config);
		});
	}
}
