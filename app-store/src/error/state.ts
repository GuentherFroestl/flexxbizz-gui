/**
 * Created by gfr on 04.01.17.
 */
export interface ErrorState {
    errors: AppError[];
}

export interface AppError {
    requestId: string;
    code: string;
    message: string;
}

export const INITIAL_STATE: ErrorState = {
    errors: []

};
