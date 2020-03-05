import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { FormUtility } from '../utilities/form.utility';
import { ApiResponseModel } from "./api-response.model";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApiService = /** @class */ (function () {
    //Service constructor
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    //Setters
    ApiService.prototype.setApiURL = function (apiURL) {
        this.apiURL = apiURL;
    };
    ApiService.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
    };
    //Fetch
    ApiService.prototype.fetchData = function (uri, params) {
        //Check cache of observables
        var _this = this;
        //Get options
        var httpOptions = {
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
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Fetch
    ApiService.prototype.getObj = function (uri, id) {
        //Check cache of observables
        var _this = this;
        //Get options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Update an object using PATCH
    ApiService.prototype.partialUpdateObj = function (uri, id, obj) {
        var _this = this;
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri + '/' + id;
        //Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Delete an object using DELETE
    ApiService.prototype.deleteObj = function (uri, id) {
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri + (id ? '/' + id : '');
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return true;
        }));
    };
    //Create an object with POST
    ApiService.prototype.createObj = function (uri, obj) {
        var _this = this;
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri;
        //check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Parse response
    ApiService.prototype.parseResponse = function (response) {
        //Current response
        var resp = new ApiResponseModel();
        //CHECK RESPONSE
        if (response
            && response.data) {
            //Load data
            resp.data = response.data;
        }
        //Return api response model
        return resp;
    };
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
    ApiService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RDtJQU1DLHFCQUFxQjtJQUNyQixvQkFDUyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUUsQ0FBQztJQUUvQixTQUFTO0lBQ0YsOEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVKLE9BQU87SUFDQSw4QkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsTUFBWTtRQUN6Qyw0QkFBNEI7UUFEN0IsaUJBcUJDO1FBbEJBLGFBQWE7UUFDYixJQUFNLFdBQVcsR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3hCLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDN0MsQ0FBQztZQUNGLE1BQU0sRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUVGLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxX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QUksQ0FBQyxXQUFXO2FBQzdDLENBQUM7U0FDRixDQUFDO1FBRUYsS0FBSztRQUNMLElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEdBQUksR0FBRyxDQUFDO1FBRXZDLGlCQUFpQjtRQUNqQixJQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDaEMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFFRCxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTthQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7YUFDM0IsSUFBSTtRQUNKLGNBQWM7UUFDZCxHQUFHLENBQUMsVUFBQyxRQUFhO1lBQ2pCLDJCQUEyQjtZQUMzQixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0I7SUFDUixrQ0FBYSxHQUFyQixVQUFzQixRQUFhO1FBQ2xDLGtCQUFrQjtRQUNsQixJQUFJLElBQUksR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXBELGdCQUFnQjtRQUNoQixJQUFHLFFBQVE7ZUFDUCxRQUFRLENBQUMsSUFBSSxFQUFDO1lBRWpCLFdBQVc7WUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFFRCwyQkFBMkI7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkF0Sm9CLFVBQVU7OztJQVJuQixVQUFVO1FBSHRCLFVBQVUsQ0FBQztZQUNYLFVBQVUsRUFBRSxNQUFNO1NBQ2xCLENBQUM7T0FDVyxVQUFVLENBZ0t0QjtxQkEzS0Q7Q0EyS0MsQUFoS0QsSUFnS0M7U0FoS1ksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IEZvcm1VdGlsaXR5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2Zvcm0udXRpbGl0eSc7XG5pbXBvcnQgeyBBcGlSZXNwb25zZU1vZGVsIH0gZnJvbSBcIi4vYXBpLXJlc3BvbnNlLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgICAvL01vZGVsc1xuICAgIHByaXZhdGUgYXBpVVJMOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG5cdC8vU2VydmljZSBjb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpe31cblxuICAgIC8vU2V0dGVyc1xuICAgIHB1YmxpYyBzZXRBcGlVUkwoYXBpVVJMOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hcGlVUkwgPSBhcGlVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgIH1cblxuXHQvL0ZldGNoXG5cdHB1YmxpYyBmZXRjaERhdGEodXJpOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD57XG5cdFx0Ly9DaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly9HZXQgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuXG5cdFx0XHR9KSxcblx0XHRcdHBhcmFtczogcGFyYW1zXG5cdFx0fTtcblxuXHRcdC8vRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdC8vUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vRmV0Y2hcblx0cHVibGljIGdldE9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+e1xuXHRcdC8vQ2hlY2sgY2FjaGUgb2Ygb2JzZXJ2YWJsZXNcblxuXHRcdC8vR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly9EbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmdldCh0aGlzLmFwaVVSTCArIHVyaSArICggaWQgPyAnLycgKyBpZCA6ICcnKSwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly9NYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly9SZXR1cm4gYXBpIHJlc3BvbnNlIG1vZGVsXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly9VcGRhdGUgYW4gb2JqZWN0IHVzaW5nIFBBVENIXG5cdHB1YmxpYyBwYXJ0aWFsVXBkYXRlT2JqKHVyaTogc3RyaW5nLCBpZDogbnVtYmVyLCAgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+e1xuXHRcdC8vUG9zdCBvcHRpb25zXG5cdFx0Y29uc3QgaHR0cE9wdGlvbnMgPSB7XG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuXHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArICcvJyArIGlkO1xuXG5cdFx0Ly9EbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LnBhdGNoKHVybCwgb2JqLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvL01hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHQvL1JldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHQvL0RlbGV0ZSBhbiBvYmplY3QgdXNpbmcgREVMRVRFXG5cdHB1YmxpYyBkZWxldGVPYmoodXJpOiBzdHJpbmcsIGlkPzogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPntcblx0XHQvL1Bvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuXG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHQvL1VybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAoaWQgPyAnLycgKyBpZCA6ICcnKTtcblxuXHRcdC8vRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5kZWxldGUodXJsLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvL01hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblx0XHRcdFx0XHQvL1JldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHQvL0NyZWF0ZSBhbiBvYmplY3Qgd2l0aCBQT1NUXG5cdHB1YmxpYyBjcmVhdGVPYmoodXJpOiBzdHJpbmcsIG9iaik6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD57XG5cdFx0Ly9Qb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly9Vcmxcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuYXBpVVJMICArIHVyaTtcblxuXHRcdC8vY2hlY2sgZm9ybSBkYXRhXG5cdFx0aWYoRm9ybVV0aWxpdHkubmVlZEZvcm1EYXRhKG9iaikpe1xuXHRcdFx0b2JqID0gRm9ybVV0aWxpdHkuanNvblRvRm9ybURhdGEob2JqKTtcblx0XHR9XG5cblx0XHQvL0RvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQucG9zdCh1cmwsIG9iaiwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly9NYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly9SZXR1cm4gYXBpIHJlc3BvbnNlIG1vZGVsXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly9QYXJzZSByZXNwb25zZVxuXHRwcml2YXRlIHBhcnNlUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IEFwaVJlc3BvbnNlTW9kZWwge1xuXHRcdC8vQ3VycmVudCByZXNwb25zZVxuXHRcdGxldCByZXNwOiBBcGlSZXNwb25zZU1vZGVsID0gbmV3IEFwaVJlc3BvbnNlTW9kZWwoKTtcblxuXHRcdC8vQ0hFQ0sgUkVTUE9OU0Vcblx0XHRpZihyZXNwb25zZSBcblx0XHRcdCYmIHJlc3BvbnNlLmRhdGEpe1xuXHRcdFxuXHRcdFx0Ly9Mb2FkIGRhdGFcblx0XHRcdHJlc3AuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0fVxuXHRcdFxuXHRcdC8vUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdHJldHVybiByZXNwO1xuXHR9XG5cdFxufSJdfQ==