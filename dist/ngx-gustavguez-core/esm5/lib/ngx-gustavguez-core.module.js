import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';
//Directives
import { NgxGustavguezMainContainerDirective } from './layout/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';
//Components
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
                NgxGustavguezNavItemComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTztBQUNQLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsWUFBWTtBQUNaLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBRXJJLFlBQVk7QUFDWixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUM5SCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQTJDbkg7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQXpDbkMsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLGlDQUFpQztnQkFDakMseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLG1DQUFtQztnQkFDbkMsZ0NBQWdDO2dCQUNoQyw2QkFBNkI7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsNEJBQTRCO2dCQUM1Qiw2QkFBNkI7YUFDaEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixZQUFZO2dCQUNaLG1CQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQiw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2dCQUM1QixpQ0FBaUM7Z0JBQ2pDLHlCQUF5QjtnQkFDekIsaUNBQWlDO2dCQUNqQyxtQ0FBbUM7Z0JBQ25DLGdDQUFnQztnQkFDaEMsNkJBQTZCO2dCQUM3QiwwQkFBMEI7Z0JBQzFCLDRCQUE0QjtnQkFDNUIsNkJBQTZCO2FBQ2hDO1NBQ0osQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vL1BpcGVzXG5pbXBvcnQgeyBQcmV0dHlEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWRhdGUucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlIb3VyUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWhvdXIucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlOdW1iZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUnO1xuXG4vL0RpcmVjdGl2ZXNcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlJztcblxuLy9Db21wb25lbnRzXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyL25neC1ndXN0YXZndWV6LWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcG9wdXAvbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LWJ1dHRvbi9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L25neC1ndXN0YXZndWV6LW5hdi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcGFnZS1oZWFkZXIvbmd4LWd1c3Rhdmd1ZXotcGFnZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpJbmZvQm94Q29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3gvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotY2FyZC9uZ3gtZ3VzdGF2Z3Vlei1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcmV0dHlEYXRlUGlwZSxcbiAgICAgICAgUHJldHR5SG91clBpcGUsXG4gICAgICAgIFByZXR0eU51bWJlclBpcGUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyRGlyZWN0aXZlLFxuICAgICAgICBOZ3hHdXN0YXZndWV6UGFnZUhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekluZm9Cb3hDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpDYXJkQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TmF2SXRlbUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUHJldHR5RGF0ZVBpcGUsXG4gICAgICAgIFByZXR0eUhvdXJQaXBlLFxuICAgICAgICBQcmV0dHlOdW1iZXJQaXBlLFxuICAgICAgICBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBhZ2VIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpJbmZvQm94Q29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6Q2FyZENvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelRvYXN0c0NvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Db21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpDb3JlTW9kdWxlIHsgfVxuIl19