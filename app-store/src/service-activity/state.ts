/**
 * ActivityState: when loading == true, then activity is ongoing.
 */
export interface ActivityState {
    loading: boolean;
    requests: string[];
}
/**
 *
 * @type {{loading: boolean}}
 */
export const INITIAL_STATE: ActivityState = {
    loading: false,
    requests: []
};