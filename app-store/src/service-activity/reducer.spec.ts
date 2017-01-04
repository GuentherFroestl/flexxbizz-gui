import {activityReducer} from './reducer';
import {ActivityActions} from './actions';
import {ActivityState, INITIAL_STATE} from './state';

describe('ActivityReducer', () => {
    let initState: ActivityState = INITIAL_STATE;

    afterEach(() => {
        expect(initState).toEqual({
                loading: false,
                requests: []
            },
            'initState was mutated!');
    });

    it('should perform ActivityStart on undefined state', () => {
        let result: ActivityState = activityReducer(undefined, {type: ActivityActions.ACTIVITY_START});
        expect(result.loading).toBe(true);
    });

    it('should perform ActivityStart on defined state', () => {
        let result: ActivityState = activityReducer(initState, {type: ActivityActions.ACTIVITY_START});
        expect(result.loading).toBe(true);
    });

    it('should perform ActivityEnd on defined state', () => {
        let result: ActivityState = activityReducer(initState, {type: ActivityActions.ACTIVITY_END});
        expect(result.loading).toBe(false);
    });
});
