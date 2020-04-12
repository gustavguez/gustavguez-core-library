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
        // Check current are equal
        if (this.activeApiResponseStrategy.getName() === strategyName) {
            return hasChanged;
        }
        // Find strategy
        ArrayUtility.every(this.apiResponseStrategies, function (strategy) {
            // Check name
            if (strategy.getName() === strategyName) {
                // Save previous
                _this.previousApiResponseStrategy = _this.activeApiResponseStrategy;
                // Load new stategy
                _this.activeApiResponseStrategy = strategy;
                // Mark has changed
                hasChanged = true;
            }
            return !hasChanged;
        });
        return hasChanged;
    };
    // Restore prev active stategy
    ApiService.prototype.restoreApiResponseStrategy = function () {
        // Check prev are not empty and is different
        if (this.previousApiResponseStrategy !== undefined
            && this.previousApiResponseStrategy.getName() !== this.activeApiResponseStrategy.getName()) {
            this.activeApiResponseStrategy = this.previousApiResponseStrategy;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7QUFLMUc7SUFTQyxzQkFBc0I7SUFDdEIsb0JBQ1MsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUM5QixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHO1lBQzVCLElBQUksNEJBQTRCLEVBQUU7WUFDbEMsSUFBSSw0QkFBNEIsRUFBRTtTQUNsQyxDQUFDO1FBRUYsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFVBQVU7SUFDSCw4QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixXQUFtQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNo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dExvQixVQUFVOzs7SUFYbkIsVUFBVTtRQUh0QixVQUFVLENBQUM7WUFDWCxVQUFVLEVBQUUsTUFBTTtTQUNsQixDQUFDO09BQ1csVUFBVSxDQW1NdEI7cUJBbE5EO0NBa05DLEFBbk1ELElBbU1DO1NBbk1ZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybVV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybS51dGlsaXR5JztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcbmltcG9ydCB7IEFwaVJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlIH0gZnJvbSAnLi9hcGktcmVzcG9uc2Utc3RyYXRlZ2llcy9hcGktcmVzcG9uc2Utc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwaURhdGFSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1kYXRhLXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcbmltcG9ydCB7IEFwaVJvb3RSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1yb290LXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0Ly8gTW9kZWxzXG5cdHByaXZhdGUgYXBpVVJMOiBzdHJpbmc7XG5cdHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBwcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2U7XG5cdHByaXZhdGUgYWN0aXZlQXBpUmVzcG9uc2VTdHJhdGVneTogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZTtcblx0cHJpdmF0ZSBhcGlSZXNwb25zZVN0cmF0ZWdpZXM6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2VbXTtcblxuXHQvLyBTZXJ2aWNlIGNvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuXHRcdC8vIExvYWQgZGF0YSBzdHJhdGVneSBieSBkZWZhdWx0XG5cdFx0dGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXMgPSBbXG5cdFx0XHRuZXcgQXBpRGF0YVJlc3BvbnNlU3RyYXRlZ3lNb2RlbCgpLFxuXHRcdFx0bmV3IEFwaVJvb3RSZXNwb25zZVN0cmF0ZWd5TW9kZWwoKVxuXHRcdF07XG5cblx0XHQvLyBTZXQgYXMgYWN0aXZlXG5cdFx0dGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5ID0gdGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXNbMF07XG5cdH1cblxuXHQvLyBTZXR0ZXJzXG5cdHB1YmxpYyBzZXRBcGlVUkwoYXBpVVJMOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFwaVVSTCA9IGFwaVVSTDtcblx0fVxuXG5cdHB1YmxpYyBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuXHR9XG5cblx0Ly8gQWRkIHN0cmF0ZWd5IG1ldGhvZFxuXHRwdWJsaWMgYWRkQXBpUmVzcG9uc2VTdHJhdGVneShzdHJhdGVneTogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZSk6IHZvaWQge1xuXHRcdGlmIChzdHJhdGVneS5nZXROYW1lKCkpIHtcblx0XHRcdHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzLnB1c2goc3RyYXRlZ3kpO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoYW5nZSBhY3RpdmUgc3RyYXRlZ3lcblx0cHVibGljIGNoYW5nZUFwaVJlc3BvbnNlU3RyYXRlZ3koc3RyYXRlZ3lOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRsZXQgaGFzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0Ly8gQ2hlY2sgY3VycmVudCBhcmUgZXF1YWxcblx0XHRpZiAodGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5LmdldE5hbWUoKSA9PT0gc3RyYXRlZ3lOYW1lKSB7XG5cdFx0XHRyZXR1cm4gaGFzQ2hhbmdlZDtcblx0XHR9XG5cblx0XHQvLyBGaW5kIHN0cmF0ZWd5XG5cdFx0QXJyYXlVdGlsaXR5LmV2ZXJ5KHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzLCAoc3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2UpID0+IHtcblx0XHRcdC8vIENoZWNrIG5hbWVcblx0XHRcdGlmIChzdHJhdGVneS5nZXROYW1lKCkgPT09IHN0cmF0ZWd5TmFtZSkge1xuXHRcdFx0XHQvLyBTYXZlIHByZXZpb3VzXG5cdFx0XHRcdHRoaXMucHJldmlvdXNBcGlSZXNwb25zZVN0cmF0ZWd5ID0gdGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5O1xuXG5cdFx0XHRcdC8vIExvYWQgbmV3IHN0YXRlZ3lcblx0XHRcdFx0dGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cblx0XHRcdFx0Ly8gTWFyayBoYXMgY2hhbmdlZFxuXHRcdFx0XHRoYXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAhaGFzQ2hhbmdlZDtcblx0XHR9KTtcblx0XHRyZXR1cm4gaGFzQ2hhbmdlZDtcblx0fVxuXG5cdC8vIFJlc3RvcmUgcHJldiBhY3RpdmUgc3RhdGVneVxuXHRwdWJsaWMgcmVzdG9yZUFwaVJlc3BvbnNlU3RyYXRlZ3koKTogdm9pZCB7XG5cdFx0Ly8gQ2hlY2sgcHJldiBhcmUgbm90IGVtcHR5IGFuZCBpcyBkaWZmZXJlbnRcblx0XHRpZiAodGhpcy5wcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3kgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgdGhpcy5wcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3kuZ2V0TmFtZSgpICE9PSB0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kuZ2V0TmFtZSgpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kgPSB0aGlzLnByZXZpb3VzQXBpUmVzcG9uc2VTdHJhdGVneTtcblx0XHR9XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZmV0Y2hEYXRhKHVyaTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pLFxuXHRcdFx0cGFyYW1zOiBwYXJhbXNcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRmV0Y2hcblx0cHVibGljIGdldE9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZ2V0KHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGFuIG9iamVjdCB1c2luZyBQQVRDSFxuXHRwdWJsaWMgcGFydGlhbFVwZGF0ZU9iaih1cmk6IHN0cmluZywgaWQ6IG51bWJlciwgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAnLycgKyBpZDtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQucGF0Y2godXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRGVsZXRlIGFuIG9iamVjdCB1c2luZyBERUxFVEVcblx0cHVibGljIGRlbGV0ZU9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArIChpZCA/ICcvJyArIGlkIDogJycpO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5kZWxldGUodXJsLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKCgpID0+IHRydWUpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIFBPU1Rcblx0cHVibGljIGNyZWF0ZU9iaih1cmk6IHN0cmluZywgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmk7XG5cblx0XHQvLyBDaGVjayBmb3JtIGRhdGFcblx0XHRpZiAoRm9ybVV0aWxpdHkubmVlZEZvcm1EYXRhKG9iaikpIHtcblx0XHRcdG9iaiA9IEZvcm1VdGlsaXR5Lmpzb25Ub0Zvcm1EYXRhKG9iaik7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wb3N0KHVybCwgb2JqLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vIFBhcnNlIHJlc3BvbnNlXG5cdHByaXZhdGUgcGFyc2VSZXNwb25zZShyZXNwb25zZTogYW55KTogQXBpUmVzcG9uc2VNb2RlbCB7XG5cdFx0Ly8gQ3VycmVudCByZXNwb25zZVxuXHRcdGNvbnN0IHJlc3A6IEFwaVJlc3BvbnNlTW9kZWwgPSBuZXcgQXBpUmVzcG9uc2VNb2RlbCgpO1xuXG5cdFx0Ly8gQ0hFQ0sgUkVTUE9OU0Vcblx0XHRyZXNwLmRhdGEgPSB0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kucGFyc2VKU09OKHJlc3BvbnNlKTtcblxuXHRcdC8vIFJldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRyZXR1cm4gcmVzcDtcblx0fVxuXG59XG4iXX0=