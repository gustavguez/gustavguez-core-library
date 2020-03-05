import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { FormUtility } from '../utilities/form.utility';
import { ApiResponseModel } from "./api-response.model";

@Injectable({
	providedIn: "root"
})
export class ApiService {

    //Models
    private apiURL: string;
    private accessToken: string;

	//Service constructor
	constructor(
		private httpClient: HttpClient){}

    //Setters
    public setApiURL(apiURL: string) {
        this.apiURL = apiURL;
    }

    public setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
    }

	//Fetch
	public fetchData(uri: string, params?: any): Observable<ApiResponseModel>{
		//Check cache of observables

		//Get options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			}),
			params: params
		};

		//Do request
		return this.httpClient
			.get(this.apiURL + uri, httpOptions)
			.pipe(
				//Map response
				map((response: any) => {
					//Return api response model
					return this.parseResponse(response);
				})
			);
	}

	//Fetch
	public getObj(uri: string, id?: any): Observable<ApiResponseModel>{
		//Check cache of observables

		//Get options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			})
		};

		//Do request
		return this.httpClient
			.get(this.apiURL + uri + ( id ? '/' + id : ''), httpOptions)
			.pipe(
				//Map response
				map((response: any) => {
					//Return api response model
					return this.parseResponse(response);
				})
			);
	}

	//Update an object using PATCH
	public partialUpdateObj(uri: string, id: number,  obj: any): Observable<ApiResponseModel>{
		//Post options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			})
		};

		//Url
		const url: string = this.apiURL + uri + '/' + id;

		//Do request
		return this.httpClient
			.patch(url, obj, httpOptions)
			.pipe(
				//Map response
				map((response: any) => {
					//Return api response model
					return this.parseResponse(response);
				})
			);
	}

	//Delete an object using DELETE
	public deleteObj(uri: string, id?: any): Observable<boolean>{
		//Post options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			})
		};

		//Url
		const url: string = this.apiURL + uri + (id ? '/' + id : '');

		//Do request
		return this.httpClient
			.delete(url, httpOptions)
			.pipe(
				//Map response
				map((response: any) => {
					//Return api response model
					return true;
				})
			);
	}

	//Create an object with POST
	public createObj(uri: string, obj): Observable<ApiResponseModel>{
		//Post options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			})
		};

		//Url
		const url: string = this.apiURL  + uri;

		//check form data
		if(FormUtility.needFormData(obj)){
			obj = FormUtility.jsonToFormData(obj);
		}

		//Do request
		return this.httpClient
			.post(url, obj, httpOptions)
			.pipe(
				//Map response
				map((response: any) => {
					//Return api response model
					return this.parseResponse(response);
				})
			);
	}

	//Parse response
	private parseResponse(response: any): ApiResponseModel {
		//Current response
		let resp: ApiResponseModel = new ApiResponseModel();

		//CHECK RESPONSE
		if(response 
			&& response.data){
		
			//Load data
			resp.data = response.data;
		}
		
		//Return api response model
		return resp;
	}
	
}