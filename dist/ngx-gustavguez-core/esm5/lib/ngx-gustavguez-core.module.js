import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';
// Directives
import { NgxGustavguezMainContainerDirective } from './layout/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';
// Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
import { NgxGustavguezNavComponent } from './layout/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezMainSidebarComponent } from './layout/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';
import { NgxGustavguezPageHeaderComponent } from './structure/ngx-gustavguez-page-header/ngx-gustavguez-page-header.component';
import { NgxGustavguezInfoBoxComponent } from './structure/ngx-gustavguez-info-box/ngx-gustavguez-info-box.component';
import { NgxGustavguezCardComponent } from './structure/ngx-gustavguez-card/ngx-gustavguez-card.component';
import { NgxGustavguezToastsComponent } from './structure/ngx-gustavguez-toasts/ngx-gustavguez-toasts.component';
import { NgxGustavguezNavItemComponent } from './layout/ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.component';
import { NgxGustavguezTableComponent } from './structure/ngx-gustavguez-table/ngx-gustavguez-table.component';
import { NgxGustavguezSubmitComponent } from './forms/ngx-gustavguez-submit/ngx-gustavguez-submit.component';
import { NgxGustavguezInputComponent } from './forms/ngx-gustavguez-input/ngx-gustavguez-input.component';
var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
                NgxGustavguezPageHeaderComponent,
                NgxGustavguezInfoBoxComponent,
                NgxGustavguezCardComponent,
                NgxGustavguezToastsComponent,
                NgxGustavguezNavItemComponent,
                NgxGustavguezTableComponent,
                NgxGustavguezSubmitComponent,
                NgxGustavguezInputComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
                ReactiveFormsModule
            ],
            exports: [
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
                NgxGustavguezPageHeaderComponent,
                NgxGustavguezInfoBoxComponent,
                NgxGustavguezCardComponent,
                NgxGustavguezToastsComponent,
                NgxGustavguezNavItemComponent,
                NgxGustavguezTableComponent,
                NgxGustavguezInputComponent,
                NgxGustavguezSubmitComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsUUFBUTtBQUNSLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBRXJJLGFBQWE7QUFDYixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUM5SCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQWlEMUc7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQS9DbkMsUUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFO2dCQUNiLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLGlDQUFpQztnQkFDakMseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLG1DQUFtQztnQkFDbkMsZ0NBQWdDO2dCQUNoQyw2QkFBNkI7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsNEJBQTRCO2dCQUM1Qiw2QkFBNkI7Z0JBQzdCLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2dCQUM1QiwyQkFBMkI7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsWUFBWTtnQkFDWixZQUFZO2dCQUNaLG1CQUFtQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQiw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2dCQUM1QixpQ0FBaUM7Z0JBQ2pDLHlCQUF5QjtnQkFDekIsaUNBQWlDO2dCQUNqQyxtQ0FBbUM7Z0JBQ25DLGdDQUFnQztnQkFDaEMsNkJBQTZCO2dCQUM3QiwwQkFBMEI7Z0JBQzFCLDRCQUE0QjtnQkFDNUIsNkJBQTZCO2dCQUM3QiwyQkFBMkI7Z0JBQzNCLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2FBQzVCO1NBQ0QsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBQaXBlc1xuaW1wb3J0IHsgUHJldHR5RGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1kYXRlLnBpcGUnO1xuaW1wb3J0IHsgUHJldHR5SG91clBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1ob3VyLnBpcGUnO1xuaW1wb3J0IHsgUHJldHR5TnVtYmVyUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LW51bWJlci5waXBlJztcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyL25neC1ndXN0YXZndWV6LWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcG9wdXAvbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LWJ1dHRvbi9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L25neC1ndXN0YXZndWV6LW5hdi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcGFnZS1oZWFkZXIvbmd4LWd1c3Rhdmd1ZXotcGFnZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpJbmZvQm94Q29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3gvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotY2FyZC9uZ3gtZ3VzdGF2Z3Vlei1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotdGFibGUvbmd4LWd1c3Rhdmd1ZXotdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpTdWJtaXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LXN1Ym1pdC9uZ3gtZ3VzdGF2Z3Vlei1zdWJtaXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQvbmd4LWd1c3Rhdmd1ZXotaW5wdXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UHJldHR5RGF0ZVBpcGUsXG5cdFx0UHJldHR5SG91clBpcGUsXG5cdFx0UHJldHR5TnVtYmVyUGlwZSxcblx0XHROZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSxcblx0XHROZ3hHdXN0YXZndWV6UGFnZUhlYWRlckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6SW5mb0JveENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6Q2FyZENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpOYXZJdGVtQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpUYWJsZUNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6U3VibWl0Q29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpJbnB1dENvbXBvbmVudCxcblx0XSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UHJldHR5RGF0ZVBpcGUsXG5cdFx0UHJldHR5SG91clBpcGUsXG5cdFx0UHJldHR5TnVtYmVyUGlwZSxcblx0XHROZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSxcblx0XHROZ3hHdXN0YXZndWV6UGFnZUhlYWRlckNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6SW5mb0JveENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6Q2FyZENvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpOYXZJdGVtQ29tcG9uZW50LFxuXHRcdE5neEd1c3Rhdmd1ZXpUYWJsZUNvbXBvbmVudCxcblx0XHROZ3hHdXN0YXZndWV6SW5wdXRDb21wb25lbnQsXG5cdFx0Tmd4R3VzdGF2Z3VlelN1Ym1pdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpDb3JlTW9kdWxlIHsgfVxuIl19