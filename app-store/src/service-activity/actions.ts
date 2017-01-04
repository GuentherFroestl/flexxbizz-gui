import { Injectable } from '@angular/core';
import {appStore} from "../store/app-store";

export class ActivityActions {
    static readonly ACTIVITY_START = 'ACTIVITY_START';
    static readonly ACTIVITY_END = 'ACTIVITY_END';
    static readonly ACTIVITIES_CLEAR = 'ACTIVITIES_CLEAR';

    constructor(private store: appStore) {
    }

    /**
     * Set ActivityState.loading to true
     */
    startActivity(id: string):void {
        this.store.dispatch({
            type: ActivityActions.ACTIVITY_START
        });
    };

    /**
     * Set ActivityState.loading to false
     */
    endActivity(id: string):void {
        this.store.dispatch({
            type: ActivityActions.ACTIVITY_END
        });
    };

    clearAllActivities():void{
        this.store.dispatch({
            type: ActivityActions.ACTIVITIES_CLEAR
        });
    }
}