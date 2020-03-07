import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class NgxGustavguezMainSidebarService {

    //Properties
    public onChangeState: EventEmitter<boolean> = new EventEmitter();
    public onToggleState: EventEmitter<void> = new EventEmitter();


    //Public methods
    public changeState(state: boolean) {
        this.onChangeState.emit(state);
    }

    public toggleState() {
        this.onToggleState.emit();
    }

}