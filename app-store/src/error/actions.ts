/**
 * Created by gfr on 04.01.17.
 */
import { appStore } from '../store/app-store';
import {AppError} from "./state";

export class ErrorActions {
    static readonly ERROR_ADD = 'ERROR_ADD';
    static readonly ERROR_CLEAR = 'ERROR_CLEAR';
    static readonly ERROR_TAIL = 'ERROR_TAIL';

    constructor(private store: appStore) {
    }

    addError(error: AppError): void {
        this.store.dispatch({
            type: ErrorActions.ERROR_ADD,
            payload: error
        });
    }

    clearErrors(): void {
        this.store.dispatch({
            type: ErrorActions.ERROR_CLEAR
        });
    }

    tailErrors(tail: number): void {
        this.store.dispatch({
            type: ErrorActions.ERROR_TAIL,
            payload: tail
        });
    }
}
