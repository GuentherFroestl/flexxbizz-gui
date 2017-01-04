/**
 * Created by gfr on 04.01.17.
 */
/**
 * UserState
 * @type {{name: string; tenantId: string; authToken: string}}
 */
export interface UserState {
    name: string;
    tenantId: string;
    authToken: string;
}
/**
 * INITIAL_STATE for UserState
 * @type {{name: string; tenantId: string; authToken: string}}
 */
export const INITIAL_STATE: UserState = {
    name: undefined,
    tenantId: undefined,
    authToken: undefined
};