import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';
//Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
import { NgxGustavguezMainContainerComponent } from './core/ngx-gustavguez-main-container/ngx-gustavguez-main-container.component';
import { NgxGustavguezNavComponent } from './core/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezMainSidebarComponent } from './core/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';
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
                NgxGustavguezMainContainerComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
            ],
            imports: [
                CommonModule,
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
                NgxGustavguezMainContainerComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPO0FBQ1AsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxZQUFZO0FBQ1osT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDOUgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDbkksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFnQzdIO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUE5Qm5DLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQiw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsNEJBQTRCO2dCQUM1QixpQ0FBaUM7Z0JBQ2pDLG1DQUFtQztnQkFDbkMseUJBQXlCO2dCQUN6QixpQ0FBaUM7YUFDcEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixtQkFBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1QiwyQkFBMkI7Z0JBQzNCLDRCQUE0QjtnQkFDNUIsaUNBQWlDO2dCQUNqQyxtQ0FBbUM7Z0JBQ25DLHlCQUF5QjtnQkFDekIsaUNBQWlDO2FBQ3BDO1NBQ0osQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vUGlwZXNcbmltcG9ydCB7IFByZXR0eURhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktZGF0ZS5waXBlJztcbmltcG9ydCB7IFByZXR0eUhvdXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktaG91ci5waXBlJztcbmltcG9ydCB7IFByZXR0eU51bWJlclBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1udW1iZXIucGlwZSc7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXBvcHVwL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL25neC1ndXN0YXZndWV6LW5hdi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZSxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQcmV0dHlEYXRlUGlwZSxcbiAgICAgICAgUHJldHR5SG91clBpcGUsXG4gICAgICAgIFByZXR0eU51bWJlclBpcGUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekNvcmVNb2R1bGUgeyB9XG4iXX0=