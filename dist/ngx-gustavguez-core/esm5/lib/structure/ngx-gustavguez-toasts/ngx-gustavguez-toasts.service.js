import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';
import * as i0 from "@angular/core";
var NgxGustavguezToastsService = /** @class */ (function () {
    function NgxGustavguezToastsService() {
        // Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    // Methods
    NgxGustavguezToastsService.prototype.addError = function (message) {
        // Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    };
    NgxGustavguezToastsService.prototype.addSuccess = function (message) {
        // Open toast
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUszRTtJQUFBO1FBRUMsaUJBQWlCO1FBQ1YsaUJBQVksR0FBMEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQWlCaEY7SUFmQSxVQUFVO0lBQ0gsNkNBQVEsR0FBZixVQUFnQixPQUFlO1FBQzlCLGFBQWE7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckIsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQ3BFLENBQUM7SUFDSCxDQUFDO0lBRU0sK0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUNoQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JCLElBQUksdUJBQXVCLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO0lBQ0gsQ0FBQzs7SUFsQlcsMEJBQTBCO1FBSHRDLFVBQVUsQ0FBQztZQUNYLFVBQVUsRUFBRSxNQUFNO1NBQ2xCLENBQUM7T0FDVywwQkFBMEIsQ0FvQnRDO3FDQTVCRDtDQTRCQyxBQXBCRCxJQW9CQztTQXBCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0Lm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vbmd4LWd1c3Rhdmd1ZXotc3RhdHVzLmVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2Uge1xuXG5cdC8vIEV2ZW50IGVtbWl0ZXJzXG5cdHB1YmxpYyBvblRvYXN0QWRkZWQ6IEV2ZW50RW1pdHRlcjxOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gTWV0aG9kc1xuXHRwdWJsaWMgYWRkRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Ly8gT3BlbiB0b2FzdFxuXHRcdHRoaXMub25Ub2FzdEFkZGVkLmVtaXQoXG5cdFx0XHRuZXcgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwobWVzc2FnZSwgTmd4R3VzdGF2Z3VlelN0YXR1c0VudW0uREFOR0VSKVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYWRkU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHQvLyBPcGVuIHRvYXN0XG5cdFx0dGhpcy5vblRvYXN0QWRkZWQuZW1pdChcblx0XHRcdG5ldyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbChtZXNzYWdlLCBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bS5TVUNDRVNTKVxuXHRcdCk7XG5cdH1cblxufVxuIl19