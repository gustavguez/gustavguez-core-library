import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { FormUtility } from '../utilities/form.utility';
import { ApiResponseModel } from "./api-response.model";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let ApiService = class ApiService {
    //Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    //Fetch
    fetchData(uri, params) {
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
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Fetch
    getObj(uri, id) {
        //Check cache of observables
        //Get options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri + '/' + id;
        //Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Delete an object using DELETE
    deleteObj(uri, id) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return true;
        }));
    }
    //Create an object with POST
    createObj(uri, obj) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri;
        //check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Parse response
    parseResponse(response) {
        //Current response
        let resp = new ApiResponseModel();
        //CHECK RESPONSE
        if (response
            && response.data) {
            //Load data
            resp.data = response.data;
        }
        //Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: "root"
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBTXRCLHFCQUFxQjtJQUNyQixZQUNTLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRSxDQUFDO0lBRS9CLFNBQVM7SUFDRixTQUFTLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sY0FBYyxDQUFDLFdBQW1CO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFSixPQUFPO0lBQ0EsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFZO1FBQ3pDLDRCQUE0QjtRQUU1QixhQUFhO1FBQ2IsTUFBTSxXQUFXLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN4QixlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzdDLENBQUM7WUFDRixNQUFNLEVBQUUsTUFBTTtTQUNkLENBQUM7UUFFRixZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTthQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsV0FBVyxDQUFDO2FB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S0FBSztRQUNMLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEdBQUksR0FBRyxDQUFDO1FBRXZDLGlCQUFpQjtRQUNqQixJQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDaEMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFFRCxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTthQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7YUFDM0IsSUFBSTtRQUNKLGNBQWM7UUFDZCxHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNyQiwyQkFBMkI7WUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1IsYUFBYSxDQUFDLFFBQWE7UUFDbEMsa0JBQWtCO1FBQ2xCLElBQUksSUFBSSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFcEQsZ0JBQWdCO1FBQ2hCLElBQUcsUUFBUTtlQUNQLFFBQVEsQ0FBQyxJQUFJLEVBQUM7WUFFakIsV0FBVztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUVELDJCQUEyQjtRQUMzQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCxDQUFBOztZQXhKcUIsVUFBVTs7O0FBUm5CLFVBQVU7SUFIdEIsVUFBVSxDQUFDO1FBQ1gsVUFBVSxFQUFFLE1BQU07S0FDbEIsQ0FBQztHQUNXLFVBQVUsQ0FnS3RCO1NBaEtZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBGb3JtVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtLnV0aWxpdHknO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2VNb2RlbCB9IGZyb20gXCIuL2FwaS1yZXNwb25zZS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgLy9Nb2RlbHNcbiAgICBwcml2YXRlIGFwaVVSTDogc3RyaW5nO1xuICAgIHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZztcblxuXHQvL1NlcnZpY2UgY29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KXt9XG5cbiAgICAvL1NldHRlcnNcbiAgICBwdWJsaWMgc2V0QXBpVVJMKGFwaVVSTDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXBpVVJMID0gYXBpVVJMO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICB9XG5cblx0Ly9GZXRjaFxuXHRwdWJsaWMgZmV0Y2hEYXRhKHVyaTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+e1xuXHRcdC8vQ2hlY2sgY2FjaGUgb2Ygb2JzZXJ2YWJsZXNcblxuXHRcdC8vR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSksXG5cdFx0XHRwYXJhbXM6IHBhcmFtc1xuXHRcdH07XG5cblx0XHQvL0RvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZ2V0KHRoaXMuYXBpVVJMICsgdXJpLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvL01hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHQvL1JldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHQvL0ZldGNoXG5cdHB1YmxpYyBnZXRPYmoodXJpOiBzdHJpbmcsIGlkPzogYW55KTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZU1vZGVsPntcblx0XHQvL0NoZWNrIGNhY2hlIG9mIG9ic2VydmFibGVzXG5cblx0XHQvL0dldCBvcHRpb25zXG5cdFx0Y29uc3QgaHR0cE9wdGlvbnMgPSB7XG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuXHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmkgKyAoIGlkID8gJy8nICsgaWQgOiAnJyksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdC8vUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vVXBkYXRlIGFuIG9iamVjdCB1c2luZyBQQVRDSFxuXHRwdWJsaWMgcGFydGlhbFVwZGF0ZU9iaih1cmk6IHN0cmluZywgaWQ6IG51bWJlciwgIG9iajogYW55KTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZU1vZGVsPntcblx0XHQvL1Bvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuXG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHQvL1VybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAnLycgKyBpZDtcblxuXHRcdC8vRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wYXRjaCh1cmwsIG9iaiwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly9NYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly9SZXR1cm4gYXBpIHJlc3BvbnNlIG1vZGVsXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly9EZWxldGUgYW4gb2JqZWN0IHVzaW5nIERFTEVURVxuXHRwdWJsaWMgZGVsZXRlT2JqKHVyaTogc3RyaW5nLCBpZD86IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj57XG5cdFx0Ly9Qb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly9Vcmxcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyk7XG5cblx0XHQvL0RvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZGVsZXRlKHVybCwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly9NYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly9SZXR1cm4gYXBpIHJlc3BvbnNlIG1vZGVsXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly9DcmVhdGUgYW4gb2JqZWN0IHdpdGggUE9TVFxuXHRwdWJsaWMgY3JlYXRlT2JqKHVyaTogc3RyaW5nLCBvYmopOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+e1xuXHRcdC8vUG9zdCBvcHRpb25zXG5cdFx0Y29uc3QgaHR0cE9wdGlvbnMgPSB7XG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuXHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCAgKyB1cmk7XG5cblx0XHQvL2NoZWNrIGZvcm0gZGF0YVxuXHRcdGlmKEZvcm1VdGlsaXR5Lm5lZWRGb3JtRGF0YShvYmopKXtcblx0XHRcdG9iaiA9IEZvcm1VdGlsaXR5Lmpzb25Ub0Zvcm1EYXRhKG9iaik7XG5cdFx0fVxuXG5cdFx0Ly9EbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LnBvc3QodXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdC8vUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vUGFyc2UgcmVzcG9uc2Vcblx0cHJpdmF0ZSBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBBcGlSZXNwb25zZU1vZGVsIHtcblx0XHQvL0N1cnJlbnQgcmVzcG9uc2Vcblx0XHRsZXQgcmVzcDogQXBpUmVzcG9uc2VNb2RlbCA9IG5ldyBBcGlSZXNwb25zZU1vZGVsKCk7XG5cblx0XHQvL0NIRUNLIFJFU1BPTlNFXG5cdFx0aWYocmVzcG9uc2UgXG5cdFx0XHQmJiByZXNwb25zZS5kYXRhKXtcblx0XHRcblx0XHRcdC8vTG9hZCBkYXRhXG5cdFx0XHRyZXNwLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuXHRcdH1cblx0XHRcblx0XHQvL1JldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRyZXR1cm4gcmVzcDtcblx0fVxuXHRcbn0iXX0=