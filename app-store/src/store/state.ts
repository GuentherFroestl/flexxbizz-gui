import {UserState} from "../user/state";
import {ActivityState} from "../service-activity/state";
import {ErrorState} from "../error/state";
/**
 * Created by gfr on 04.01.17.
 */
export interface appState {
    error: ErrorState;
    activity: ActivityState;
    user: UserState;

}
/**
 * Init State set to undefined, to enable INIT with reducers.
 * @type {{module: {}; user: any; serviceDiscovery: any; error: any; activity: any}}
 */
export const INITIAL_STATE: appState = {
    user: undefined,
    error: undefined,
    activity: undefined,

};