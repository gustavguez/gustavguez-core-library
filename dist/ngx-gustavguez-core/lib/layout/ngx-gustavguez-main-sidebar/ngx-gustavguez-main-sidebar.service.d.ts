import { EventEmitter } from '@angular/core';
export declare class NgxGustavguezMainSidebarService {
    onChangeState: EventEmitter<boolean>;
    onToggleState: EventEmitter<void>;
    changeState(state: boolean): void;
    toggleState(): void;
}
