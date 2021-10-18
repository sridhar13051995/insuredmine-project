import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IApplicationEvent } from './interface';

@Injectable({
    providedIn: 'root',
})
export class ApplicationEventService {
    // Observable event sources
    private _appEvent = new Subject<IApplicationEvent>();

    // Observable event streams
    appEvent$ = this._appEvent.asObservable();

    // Service emit commands
    emitAnEvent(appEvent: IApplicationEvent) {
        this._appEvent.next(appEvent);
    }
}

