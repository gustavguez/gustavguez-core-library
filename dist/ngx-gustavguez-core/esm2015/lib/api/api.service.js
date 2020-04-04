import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormUtility } from '../utilities/form.utility';
import { ApiResponseModel } from './api-response.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let ApiService = class ApiService {
    // Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    // Fetch
    fetchData(uri, params) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            }),
            params: params
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Fetch
    getObj(uri, id) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + '/' + id;
        // Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Delete an object using DELETE
    deleteObj(uri, id) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        // Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        // Map response
        map(() => true));
    }
    // Create an object with POST
    createObj(uri, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri;
        // Check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        // Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Parse response
    parseResponse(response) {
        // Current response
        const resp = new ApiResponseModel();
        // CHECK RESPONSE
        if (response
            && response.data) {
            // Load data
            resp.data = response.data;
        }
        // Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBTXRCLHNCQUFzQjtJQUN0QixZQUNTLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRXBDLFVBQVU7SUFDSCxTQUFTLENBQUMsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRU0sY0FBYyxDQUFDLFdBQW1CO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRO0lBQ0QsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFZO1FBQ3pDLDZCQUE2QjtRQUU3QixjQUFjO1FBQ2QsTUFBTSxXQUFXLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN4QixhQUFhLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzNDLENBQUM7WUFDRixNQUFNLEVBQUUsTUFBTTtTQUNkLENBQUM7UUFFRixhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVTthQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsV0FBVyxDQUFDO2FB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QUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDO2FBQzNCLElBQUk7UUFDSixlQUFlO1FBQ2YsR0FBRyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO0lBQ1QsYUFBYSxDQUFDLFFBQWE7UUFDbEMsbUJBQW1CO1FBQ25CLE1BQU0sSUFBSSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksUUFBUTtlQUNSLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFFbEIsWUFBWTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUVELDRCQUE0QjtRQUM1QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCxDQUFBOztZQXpJcUIsVUFBVTs7O0FBUm5CLFVBQVU7SUFIdEIsVUFBVSxDQUFDO1FBQ1gsVUFBVSxFQUFFLE1BQU07S0FDbEIsQ0FBQztHQUNXLFVBQVUsQ0FpSnRCO1NBakpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybVV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybS51dGlsaXR5JztcbmltcG9ydCB7IEFwaVJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG5cdC8vIE1vZGVsc1xuXHRwcml2YXRlIGFwaVVSTDogc3RyaW5nO1xuXHRwcml2YXRlIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cblx0Ly8gU2VydmljZSBjb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxuXG5cdC8vIFNldHRlcnNcblx0cHVibGljIHNldEFwaVVSTChhcGlVUkw6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYXBpVVJMID0gYXBpVVJMO1xuXHR9XG5cblx0cHVibGljIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZmV0Y2hEYXRhKHVyaTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pLFxuXHRcdFx0cGFyYW1zOiBwYXJhbXNcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRmV0Y2hcblx0cHVibGljIGdldE9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZ2V0KHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGFuIG9iamVjdCB1c2luZyBQQVRDSFxuXHRwdWJsaWMgcGFydGlhbFVwZGF0ZU9iaih1cmk6IHN0cmluZywgaWQ6IG51bWJlciwgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAnLycgKyBpZDtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQucGF0Y2godXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRGVsZXRlIGFuIG9iamVjdCB1c2luZyBERUxFVEVcblx0cHVibGljIGRlbGV0ZU9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArIChpZCA/ICcvJyArIGlkIDogJycpO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5kZWxldGUodXJsLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKCgpID0+IHRydWUpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIFBPU1Rcblx0cHVibGljIGNyZWF0ZU9iaih1cmk6IHN0cmluZywgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmk7XG5cblx0XHQvLyBDaGVjayBmb3JtIGRhdGFcblx0XHRpZiAoRm9ybVV0aWxpdHkubmVlZEZvcm1EYXRhKG9iaikpIHtcblx0XHRcdG9iaiA9IEZvcm1VdGlsaXR5Lmpzb25Ub0Zvcm1EYXRhKG9iaik7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wb3N0KHVybCwgb2JqLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vIFBhcnNlIHJlc3BvbnNlXG5cdHByaXZhdGUgcGFyc2VSZXNwb25zZShyZXNwb25zZTogYW55KTogQXBpUmVzcG9uc2VNb2RlbCB7XG5cdFx0Ly8gQ3VycmVudCByZXNwb25zZVxuXHRcdGNvbnN0IHJlc3A6IEFwaVJlc3BvbnNlTW9kZWwgPSBuZXcgQXBpUmVzcG9uc2VNb2RlbCgpO1xuXG5cdFx0Ly8gQ0hFQ0sgUkVTUE9OU0Vcblx0XHRpZiAocmVzcG9uc2Vcblx0XHRcdCYmIHJlc3BvbnNlLmRhdGEpIHtcblxuXHRcdFx0Ly8gTG9hZCBkYXRhXG5cdFx0XHRyZXNwLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRyZXR1cm4gcmVzcDtcblx0fVxuXG59XG4iXX0=