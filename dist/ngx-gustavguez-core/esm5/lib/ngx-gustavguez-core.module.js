import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';
//Directives
import { NgxGustavguezMainContainerDirective } from './core/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';
//Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
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
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
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
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPO0FBQ1AsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxZQUFZO0FBQ1osT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFFbkksWUFBWTtBQUNaLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzlILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBZ0M3SDtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBOUJuQyxRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1QiwyQkFBMkI7Z0JBQzNCLDRCQUE0QjtnQkFDNUIsaUNBQWlDO2dCQUNqQyx5QkFBeUI7Z0JBQ3pCLGlDQUFpQztnQkFDakMsbUNBQW1DO2FBQ3RDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osbUJBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLGlDQUFpQztnQkFDakMseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLG1DQUFtQzthQUN0QztTQUNKLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUEsQUFBeEMsSUFBd0M7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vL1BpcGVzXG5pbXBvcnQgeyBQcmV0dHlEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWRhdGUucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlIb3VyUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWhvdXIucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlOdW1iZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUnO1xuXG4vL0RpcmVjdGl2ZXNcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JlL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXBvcHVwL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvbmd4LWd1c3Rhdmd1ZXotbmF2L25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUHJldHR5RGF0ZVBpcGUsXG4gICAgICAgIFByZXR0eUhvdXJQaXBlLFxuICAgICAgICBQcmV0dHlOdW1iZXJQaXBlLFxuICAgICAgICBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZSxcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6Q29yZU1vZHVsZSB7IH1cbiJdfQ==