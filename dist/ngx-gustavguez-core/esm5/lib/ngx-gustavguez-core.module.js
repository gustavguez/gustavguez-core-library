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
var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule
            ],
            exports: [
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPO0FBQ1AsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxZQUFZO0FBQ1osT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUEwQjlIO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUF4Qm5DLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1QixpQ0FBaUM7YUFDcEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixtQkFBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNEJBQTRCO2dCQUM1QiwyQkFBMkI7Z0JBQzNCLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFDNUIsaUNBQWlDO2FBQ3BDO1NBQ0osQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vUGlwZXNcbmltcG9ydCB7IFByZXR0eURhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktZGF0ZS5waXBlJztcbmltcG9ydCB7IFByZXR0eUhvdXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktaG91ci5waXBlJztcbmltcG9ydCB7IFByZXR0eU51bWJlclBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1udW1iZXIucGlwZSc7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXBvcHVwL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBQcmV0dHlEYXRlUGlwZSxcbiAgICAgICAgUHJldHR5SG91clBpcGUsXG4gICAgICAgIFByZXR0eU51bWJlclBpcGUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBQcmV0dHlEYXRlUGlwZSxcbiAgICAgICAgUHJldHR5SG91clBpcGUsXG4gICAgICAgIFByZXR0eU51bWJlclBpcGUsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekNvcmVNb2R1bGUgeyB9XG4iXX0=