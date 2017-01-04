/**
 * Created by gfr on 04.01.17.
 */
import { AppAction } from '../store/app-action';
import { ActivityActions } from './actions';
import { INITIAL_STATE, ActivityState } from './state';

export function activityReducer(state = INITIAL_STATE, action: AppAction): ActivityState {
    switch (action.type) {
        case ActivityActions.ACTIVITY_START:
            return Object.assign(Object.assign({}, state), {
                loading: true
            });
        case ActivityActions.ACTIVITY_END:
            return Object.assign(Object.assign({}, state), {
                loading: false
            });
        default:
            return state;
    }
}