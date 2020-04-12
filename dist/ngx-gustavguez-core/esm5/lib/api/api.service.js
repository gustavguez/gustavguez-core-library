import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormUtility } from '../utilities/form.utility';
import { ArrayUtility } from '../utilities/array.utility';
import { ApiResponseModel } from './api-response.model';
import { ApiDataResponseStrategyModel } from './api-response-strategies/api-data-response-strategy.model';
import { ApiRootResponseStrategyModel } from './api-response-strategies/api-root-response-strategy.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApiService = /** @class */ (function () {
    // Service constructor
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        // Load data strategy by default
        this.apiResponseStrategies = [
            new ApiDataResponseStrategyModel(),
            new ApiRootResponseStrategyModel()
        ];
        // Set as active
        this.activeApiResponseStrategy = this.apiResponseStrategies[0];
    }
    // Setters
    ApiService.prototype.setApiURL = function (apiURL) {
        this.apiURL = apiURL;
    };
    ApiService.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
    };
    // Add strategy method
    ApiService.prototype.addApiResponseStrategy = function (strategy) {
        if (strategy.getName()) {
            this.apiResponseStrategies.push(strategy);
        }
    };
    // Change active strategy
    ApiService.prototype.changeApiResponseStrategy = function (strategyName) {
        var _this = this;
        var hasChanged = false;
        ArrayUtility.every(this.apiResponseStrategies, function (strategy) {
            // Check name
            if (strategy.getName() === strategyName) {
                _this.activeApiResponseStrategy = strategy;
                // Mark has changed
                hasChanged = true;
            }
            return !hasChanged;
        });
        return hasChanged;
    };
    // Fetch
    ApiService.prototype.fetchData = function (uri, params) {
        // Check cache of observables
        var _this = this;
        // Get options
        var httpOptions = {
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
        map(function (response) { return _this.parseResponse(response); }));
    };
    // Fetch
    ApiService.prototype.getObj = function (uri, id) {
        // Check cache of observables
        var _this = this;
        // Get options
        var httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        // Map response
        map(function (response) { return _this.parseResponse(response); }));
    };
    // Update an object using PATCH
    ApiService.prototype.partialUpdateObj = function (uri, id, obj) {
        var _this = this;
        // Post options
        var httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        var url = this.apiURL + uri + '/' + id;
        // Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        // Map response
        map(function (response) { return _this.parseResponse(response); }));
    };
    // Delete an object using DELETE
    ApiService.prototype.deleteObj = function (uri, id) {
        // Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        // Url
        var url = this.apiURL + uri + (id ? '/' + id : '');
        // Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        // Map response
        map(function () { return true; }));
    };
    // Create an object with POST
    ApiService.prototype.createObj = function (uri, obj) {
        var _this = this;
        // Post options
        var httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        var url = this.apiURL + uri;
        // Check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        // Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        // Map response
        map(function (response) { return _this.parseResponse(response); }));
    };
    // Parse response
    ApiService.prototype.parseResponse = function (response) {
        // Current response
        var resp = new ApiResponseModel();
        // CHECK RESPONSE
        resp.data = this.activeApiResponseStrategy.parseJSON(response);
        // Return api response model
        return resp;
    };
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
    ApiService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7QUFLMUc7SUFRQyxzQkFBc0I7SUFDdEIsb0JBQ1MsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUM5QixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHO1lBQzVCLElBQUksNEJBQTRCLEVBQUU7WUFDbEMsSUFBSSw0QkFBNEIsRUFBRTtTQUNsQyxDQUFDO1FBRUYsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFVBQVU7SUFDSCw4QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixXQUFtQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNo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R0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDO2FBQzNCLElBQUk7UUFDSixlQUFlO1FBQ2YsR0FBRyxDQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQjtJQUNULGtDQUFhLEdBQXJCLFVBQXNCLFFBQWE7UUFDbEMsbUJBQW1CO1FBQ25CLElBQU0sSUFBSSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRCw0QkFBNEI7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkFuS29CLFVBQVU7OztJQVZuQixVQUFVO1FBSHRCLFVBQVUsQ0FBQztZQUNYLFVBQVUsRUFBRSxNQUFNO1NBQ2xCLENBQUM7T0FDVyxVQUFVLENBK0t0QjtxQkE5TEQ7Q0E4TEMsQUEvS0QsSUErS0M7U0EvS1ksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtLnV0aWxpdHknO1xuaW1wb3J0IHsgQXJyYXlVdGlsaXR5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2FycmF5LnV0aWxpdHknO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2VNb2RlbCB9IGZyb20gJy4vYXBpLXJlc3BvbnNlLm1vZGVsJztcbmltcG9ydCB7IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2UgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1yZXNwb25zZS1zdHJhdGVneS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXBpRGF0YVJlc3BvbnNlU3RyYXRlZ3lNb2RlbCB9IGZyb20gJy4vYXBpLXJlc3BvbnNlLXN0cmF0ZWdpZXMvYXBpLWRhdGEtcmVzcG9uc2Utc3RyYXRlZ3kubW9kZWwnO1xuaW1wb3J0IHsgQXBpUm9vdFJlc3BvbnNlU3RyYXRlZ3lNb2RlbCB9IGZyb20gJy4vYXBpLXJlc3BvbnNlLXN0cmF0ZWdpZXMvYXBpLXJvb3QtcmVzcG9uc2Utc3RyYXRlZ3kubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuXHQvLyBNb2RlbHNcblx0cHJpdmF0ZSBhcGlVUkw6IHN0cmluZztcblx0cHJpdmF0ZSBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRwcml2YXRlIGFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2U7XG5cdHByaXZhdGUgYXBpUmVzcG9uc2VTdHJhdGVnaWVzOiBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlW107XG5cblx0Ly8gU2VydmljZSBjb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcblx0XHQvLyBMb2FkIGRhdGEgc3RyYXRlZ3kgYnkgZGVmYXVsdFxuXHRcdHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzID0gW1xuXHRcdFx0bmV3IEFwaURhdGFSZXNwb25zZVN0cmF0ZWd5TW9kZWwoKSxcblx0XHRcdG5ldyBBcGlSb290UmVzcG9uc2VTdHJhdGVneU1vZGVsKClcblx0XHRdO1xuXG5cdFx0Ly8gU2V0IGFzIGFjdGl2ZVxuXHRcdHRoaXMuYWN0aXZlQXBpUmVzcG9uc2VTdHJhdGVneSA9IHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzWzBdO1xuXHR9XG5cblx0Ly8gU2V0dGVyc1xuXHRwdWJsaWMgc2V0QXBpVVJMKGFwaVVSTDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hcGlVUkwgPSBhcGlVUkw7XG5cdH1cblxuXHRwdWJsaWMgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcblx0fVxuXG5cdC8vIEFkZCBzdHJhdGVneSBtZXRob2Rcblx0cHVibGljIGFkZEFwaVJlc3BvbnNlU3RyYXRlZ3koc3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHRpZiAoc3RyYXRlZ3kuZ2V0TmFtZSgpKSB7XG5cdFx0XHR0aGlzLmFwaVJlc3BvbnNlU3RyYXRlZ2llcy5wdXNoKHN0cmF0ZWd5KTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFuZ2UgYWN0aXZlIHN0cmF0ZWd5XG5cdHB1YmxpYyBjaGFuZ2VBcGlSZXNwb25zZVN0cmF0ZWd5KHN0cmF0ZWd5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0bGV0IGhhc0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRcdEFycmF5VXRpbGl0eS5ldmVyeSh0aGlzLmFwaVJlc3BvbnNlU3RyYXRlZ2llcywgKHN0cmF0ZWd5OiBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlKSA9PiB7XG5cdFx0XHQvLyBDaGVjayBuYW1lXG5cdFx0XHRpZiAoc3RyYXRlZ3kuZ2V0TmFtZSgpID09PSBzdHJhdGVneU5hbWUpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cblx0XHRcdFx0Ly8gTWFyayBoYXMgY2hhbmdlZFxuXHRcdFx0XHRoYXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAhaGFzQ2hhbmdlZDtcblx0XHR9KTtcblx0XHRyZXR1cm4gaGFzQ2hhbmdlZDtcblx0fVxuXG5cdC8vIEZldGNoXG5cdHB1YmxpYyBmZXRjaERhdGEodXJpOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIENoZWNrIGNhY2hlIG9mIG9ic2VydmFibGVzXG5cblx0XHQvLyBHZXQgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSksXG5cdFx0XHRwYXJhbXM6IHBhcmFtc1xuXHRcdH07XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmdldCh0aGlzLmFwaVVSTCArIHVyaSwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZ2V0T2JqKHVyaTogc3RyaW5nLCBpZD86IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIENoZWNrIGNhY2hlIG9mIG9ic2VydmFibGVzXG5cblx0XHQvLyBHZXQgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmkgKyAoaWQgPyAnLycgKyBpZCA6ICcnKSwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBVcGRhdGUgYW4gb2JqZWN0IHVzaW5nIFBBVENIXG5cdHB1YmxpYyBwYXJ0aWFsVXBkYXRlT2JqKHVyaTogc3RyaW5nLCBpZDogbnVtYmVyLCBvYmo6IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArICcvJyArIGlkO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wYXRjaCh1cmwsIG9iaiwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBEZWxldGUgYW4gb2JqZWN0IHVzaW5nIERFTEVURVxuXHRwdWJsaWMgZGVsZXRlT2JqKHVyaTogc3RyaW5nLCBpZD86IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuXG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHQvLyBVcmxcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyk7XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmRlbGV0ZSh1cmwsIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKCkgPT4gdHJ1ZSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggUE9TVFxuXHRwdWJsaWMgY3JlYXRlT2JqKHVyaTogc3RyaW5nLCBvYmo6IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaTtcblxuXHRcdC8vIENoZWNrIGZvcm0gZGF0YVxuXHRcdGlmIChGb3JtVXRpbGl0eS5uZWVkRm9ybURhdGEob2JqKSkge1xuXHRcdFx0b2JqID0gRm9ybVV0aWxpdHkuanNvblRvRm9ybURhdGEob2JqKTtcblx0XHR9XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LnBvc3QodXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gUGFyc2UgcmVzcG9uc2Vcblx0cHJpdmF0ZSBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBBcGlSZXNwb25zZU1vZGVsIHtcblx0XHQvLyBDdXJyZW50IHJlc3BvbnNlXG5cdFx0Y29uc3QgcmVzcDogQXBpUmVzcG9uc2VNb2RlbCA9IG5ldyBBcGlSZXNwb25zZU1vZGVsKCk7XG5cblx0XHQvLyBDSEVDSyBSRVNQT05TRVxuXHRcdHJlc3AuZGF0YSA9IHRoaXMuYWN0aXZlQXBpUmVzcG9uc2VTdHJhdGVneS5wYXJzZUpTT04ocmVzcG9uc2UpO1xuXG5cdFx0Ly8gUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdHJldHVybiByZXNwO1xuXHR9XG5cbn1cbiJdfQ==