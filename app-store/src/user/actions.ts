/**
 * Created by gfr on 04.01.17.
 */
import {appStore} from '../store/app-store';
import {UserState} from './state';


export class UserActions {
    static readonly USER_SET = 'USER_SET';
    static readonly USER_CLEAR = 'USER_CLEAR';
    static readonly USER_NAMESET = 'USER_NAME_SET';
    static readonly AUTH_TOKEN_SET = 'USER_AUTH_TOKEN_SET';
    static readonly AUTH_TOKEN_CLEAR = 'USER_AUTH_TOKEN_CLEAR';
    static readonly TENANT_ID_SET = 'USER_TENANT_ID_SET';

    constructor(private store: appStore) {
    }

    setUser(user: UserState): void {
        this.store.dispatch({
            type: UserActions.USER_SET,
            payload: user
        });
    }

    clearUser(): void {
        this.store.dispatch({
            type: UserActions.USER_CLEAR
        });
    }

    setUserName(name: string): void {
        this.store.dispatch({
            type: UserActions.USER_NAMESET,
            payload: name
        });
    }

    setAuthToken(token: string): void {
        this.store.dispatch({
            type: UserActions.AUTH_TOKEN_SET,
            payload: token
        });
    }

    clearAccessToken(): void {
        this.store.dispatch({
            type: UserActions.AUTH_TOKEN_CLEAR
        });
    }

    setTenantId(id: string): void {
        this.store.dispatch({
            type: UserActions.TENANT_ID_SET,
            payload: id
        });
    }

}