/**
 * Created by gfr on 04.01.17.
 */
import {AppAction} from '../store/app-action';
import {UserActions} from './actions';
import {UserState, INITIAL_STATE} from './state';

export function userReducer(state: UserState = INITIAL_STATE, action: AppAction): UserState {
    switch (action.type) {
        case UserActions.USER_SET:
            return Object.assign({}, action.payload);

        case UserActions.USER_CLEAR:
            return Object.assign({}, INITIAL_STATE);

        case UserActions.USER_NAMESET:
            return Object.assign({}, state, {
                name: action.payload
            });

        case UserActions.AUTH_TOKEN_SET:
            return Object.assign({}, state, {
                authToken: action.payload
            });

        case UserActions.AUTH_TOKEN_CLEAR:
            return Object.assign({}, state, {
                authToken: ''
            });

        case UserActions.TENANT_ID_SET:
            return Object.assign({}, state, {
                tenantId: action.payload
            });

        default:
            return state;
    }
}
