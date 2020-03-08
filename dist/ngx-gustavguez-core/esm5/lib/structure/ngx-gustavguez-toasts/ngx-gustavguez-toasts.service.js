import { __decorate } from "tslib";
import { Injectable, EventEmitter } from "@angular/core";
import { NgxGustavguezToastModel } from "./ngx-gustavguez-toast.model";
import { NgxGustavguezStatusEnum } from "../../ngx-gustavguez-status.enum";
import * as i0 from "@angular/core";
var NgxGustavguezToastsService = /** @class */ (function () {
    //Inject service
    function NgxGustavguezToastsService() {
        //Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    //Methods
    NgxGustavguezToastsService.prototype.addError = function (message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    };
    NgxGustavguezToastsService.prototype.addSuccess = function (message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.SUCCESS));
    };
    NgxGustavguezToastsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxGustavguezToastsService_Factory() { return new NgxGustavguezToastsService(); }, token: NgxGustavguezToastsService, providedIn: "root" });
    NgxGustavguezToastsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NgxGustavguezToastsService);
    return NgxGustavguezToastsService;
}());
export { NgxGustavguezToastsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ3RFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUszRTtJQUtJLGdCQUFnQjtJQUNoQjtRQUpBLGdCQUFnQjtRQUNULGlCQUFZLEdBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEUsQ0FBQztJQUVmLFNBQVM7SUFDRiw2Q0FBUSxHQUFmLFVBQWdCLE9BQWU7UUFDM0IsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQixJQUFJLHVCQUF1QixDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FDdkUsQ0FBQztJQUNOLENBQUM7SUFFTSwrQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQzdCLFlBQVk7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEIsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQ3hFLENBQUM7SUFDTixDQUFDOztJQXJCUSwwQkFBMEI7UUFIdEMsVUFBVSxDQUFDO1lBQ1gsVUFBVSxFQUFFLE1BQU07U0FDbEIsQ0FBQztPQUNXLDBCQUEwQixDQXVCdEM7cUNBL0JEO0NBK0JDLEFBdkJELElBdUJDO1NBdkJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsIH0gZnJvbSBcIi4vbmd4LWd1c3Rhdmd1ZXotdG9hc3QubW9kZWxcIlxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelN0YXR1c0VudW0gfSBmcm9tIFwiLi4vLi4vbmd4LWd1c3Rhdmd1ZXotc3RhdHVzLmVudW1cIjtcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlIHtcblxuICAgIC8vRXZlbnQgZW1taXRlcnNcbiAgICBwdWJsaWMgb25Ub2FzdEFkZGVkOiBFdmVudEVtaXR0ZXI8Tmd4R3VzdGF2Z3VlelRvYXN0TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZVxuICAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgLy9NZXRob2RzXG4gICAgcHVibGljIGFkZEVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICAvL09wZW4gdG9hc3RcbiAgICAgICAgdGhpcy5vblRvYXN0QWRkZWQuZW1pdChcbiAgICAgICAgICAgIG5ldyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbChtZXNzYWdlLCBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bS5EQU5HRVIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIC8vT3BlbiB0b2FzdFxuICAgICAgICB0aGlzLm9uVG9hc3RBZGRlZC5lbWl0KFxuICAgICAgICAgICAgbmV3IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKG1lc3NhZ2UsIE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtLlNVQ0NFU1MpXG4gICAgICAgICk7XG4gICAgfVxuXG59Il19