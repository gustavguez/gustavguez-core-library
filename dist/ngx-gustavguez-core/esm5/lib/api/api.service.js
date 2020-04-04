import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormUtility } from '../utilities/form.utility';
import { ApiResponseModel } from './api-response.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApiService = /** @class */ (function () {
    // Service constructor
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    // Setters
    ApiService.prototype.setApiURL = function (apiURL) {
        this.apiURL = apiURL;
    };
    ApiService.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
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
        if (response
            && response.data) {
            // Load data
            resp.data = response.data;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RDtJQU1DLHNCQUFzQjtJQUN0QixvQkFDUyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUVwQyxVQUFVO0lBQ0gsOEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7SUFDRCw4QkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsTUFBWTtRQUN6Qyw2QkFBNkI7UUFEOUIsaUJBa0JDO1FBZkEsY0FBYztRQUNkLElBQU0sV0FBVyxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDeEIsYUFBYSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVzthQUMzQyxDQUFDO1lBQ0YsTUFBTSxFQUFFLE1BQU07U0FDZCxDQUFDO1FBRUYsYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLFdB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RyxHQUFHLENBQUM7UUFFdEMsa0JBQWtCO1FBQ2xCLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxHQUFHLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUVELGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQzthQUMzQixJQUFJO1FBQ0osZUFBZTtRQUNmLEdBQUcsQ0FBQyxVQUFDLFFBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUI7SUFDVCxrQ0FBYSxHQUFyQixVQUFzQixRQUFhO1FBQ2xDLG1CQUFtQjtRQUNuQixJQUFNLElBQUksR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXRELGlCQUFpQjtRQUNqQixJQUFJLFFBQVE7ZUFDUixRQUFRLENBQUMsSUFBSSxFQUFFO1lBRWxCLFlBQVk7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFFRCw0QkFBNEI7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkF2SW9CLFVBQVU7OztJQVJuQixVQUFVO1FBSHRCLFVBQVUsQ0FBQztZQUNYLFVBQVUsRUFBRSxNQUFNO1NBQ2xCLENBQUM7T0FDVyxVQUFVLENBaUp0QjtxQkE1SkQ7Q0E0SkMsQUFqSkQsSUFpSkM7U0FqSlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtLnV0aWxpdHknO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2VNb2RlbCB9IGZyb20gJy4vYXBpLXJlc3BvbnNlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0Ly8gTW9kZWxzXG5cdHByaXZhdGUgYXBpVVJMOiBzdHJpbmc7XG5cdHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZztcblxuXHQvLyBTZXJ2aWNlIGNvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cblx0Ly8gU2V0dGVyc1xuXHRwdWJsaWMgc2V0QXBpVVJMKGFwaVVSTDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hcGlVUkwgPSBhcGlVUkw7XG5cdH1cblxuXHRwdWJsaWMgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcblx0fVxuXG5cdC8vIEZldGNoXG5cdHB1YmxpYyBmZXRjaERhdGEodXJpOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIENoZWNrIGNhY2hlIG9mIG9ic2VydmFibGVzXG5cblx0XHQvLyBHZXQgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSksXG5cdFx0XHRwYXJhbXM6IHBhcmFtc1xuXHRcdH07XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmdldCh0aGlzLmFwaVVSTCArIHVyaSwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZ2V0T2JqKHVyaTogc3RyaW5nLCBpZD86IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIENoZWNrIGNhY2hlIG9mIG9ic2VydmFibGVzXG5cblx0XHQvLyBHZXQgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmkgKyAoaWQgPyAnLycgKyBpZCA6ICcnKSwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBVcGRhdGUgYW4gb2JqZWN0IHVzaW5nIFBBVENIXG5cdHB1YmxpYyBwYXJ0aWFsVXBkYXRlT2JqKHVyaTogc3RyaW5nLCBpZDogbnVtYmVyLCBvYmo6IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArICcvJyArIGlkO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wYXRjaCh1cmwsIG9iaiwgaHR0cE9wdGlvbnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0Ly8gTWFwIHJlc3BvbnNlXG5cdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBEZWxldGUgYW4gb2JqZWN0IHVzaW5nIERFTEVURVxuXHRwdWJsaWMgZGVsZXRlT2JqKHVyaTogc3RyaW5nLCBpZD86IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuXG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHQvLyBVcmxcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyk7XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmRlbGV0ZSh1cmwsIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKCkgPT4gdHJ1ZSlcblx0XHRcdCk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggUE9TVFxuXHRwdWJsaWMgY3JlYXRlT2JqKHVyaTogc3RyaW5nLCBvYmo6IGFueSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2VNb2RlbD4ge1xuXHRcdC8vIFBvc3Qgb3B0aW9uc1xuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xuXHRcdFx0aGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaTtcblxuXHRcdC8vIENoZWNrIGZvcm0gZGF0YVxuXHRcdGlmIChGb3JtVXRpbGl0eS5uZWVkRm9ybURhdGEob2JqKSkge1xuXHRcdFx0b2JqID0gRm9ybVV0aWxpdHkuanNvblRvRm9ybURhdGEob2JqKTtcblx0XHR9XG5cblx0XHQvLyBEbyByZXF1ZXN0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LnBvc3QodXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gUGFyc2UgcmVzcG9uc2Vcblx0cHJpdmF0ZSBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBBcGlSZXNwb25zZU1vZGVsIHtcblx0XHQvLyBDdXJyZW50IHJlc3BvbnNlXG5cdFx0Y29uc3QgcmVzcDogQXBpUmVzcG9uc2VNb2RlbCA9IG5ldyBBcGlSZXNwb25zZU1vZGVsKCk7XG5cblx0XHQvLyBDSEVDSyBSRVNQT05TRVxuXHRcdGlmIChyZXNwb25zZVxuXHRcdFx0JiYgcmVzcG9uc2UuZGF0YSkge1xuXG5cdFx0XHQvLyBMb2FkIGRhdGFcblx0XHRcdHJlc3AuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGFwaSByZXNwb25zZSBtb2RlbFxuXHRcdHJldHVybiByZXNwO1xuXHR9XG5cbn1cbiJdfQ==