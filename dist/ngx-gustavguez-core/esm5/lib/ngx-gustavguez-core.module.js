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
                NgxGustavguezToastsComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTztBQUNQLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsWUFBWTtBQUNaLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBRXJJLFlBQVk7QUFDWixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUM5SCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQXlDakg7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQXZDbkMsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLGlDQUFpQztnQkFDakMseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLG1DQUFtQztnQkFDbkMsZ0NBQWdDO2dCQUNoQyw2QkFBNkI7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsNEJBQTRCO2FBQy9CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixtQkFBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1QiwyQkFBMkI7Z0JBQzNCLDRCQUE0QjtnQkFDNUIsaUNBQWlDO2dCQUNqQyx5QkFBeUI7Z0JBQ3pCLGlDQUFpQztnQkFDakMsbUNBQW1DO2dCQUNuQyxnQ0FBZ0M7Z0JBQ2hDLDZCQUE2QjtnQkFDN0IsMEJBQTBCO2dCQUMxQiw0QkFBNEI7YUFDL0I7U0FDSixDQUFDO09BQ1csdUJBQXVCLENBQUk7SUFBRCw4QkFBQztDQUFBLEFBQXhDLElBQXdDO1NBQTNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vUGlwZXNcbmltcG9ydCB7IFByZXR0eURhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktZGF0ZS5waXBlJztcbmltcG9ydCB7IFByZXR0eUhvdXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktaG91ci5waXBlJztcbmltcG9ydCB7IFByZXR0eU51bWJlclBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1udW1iZXIucGlwZSc7XG5cbi8vRGlyZWN0aXZlc1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2L25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1wYWdlLWhlYWRlci9uZ3gtZ3VzdGF2Z3Vlei1wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekluZm9Cb3hDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1pbmZvLWJveC9uZ3gtZ3VzdGF2Z3Vlei1pbmZvLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekNhcmRDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1jYXJkL25neC1ndXN0YXZndWV6LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZSxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQYWdlSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5mb0JveENvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekNhcmRDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZSxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQYWdlSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5mb0JveENvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekNhcmRDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpDb3JlTW9kdWxlIHsgfVxuIl19