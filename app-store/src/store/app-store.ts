/**
 * Created by gfr on 04.01.17.
 */
import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {ActivityState} from "../service-activity/state";
import {DevToolsExtension, NgRedux} from 'ng2-redux';
import {combineReducers, StoreEnhancer} from 'redux';
import {EpicMiddleware, Epic, createEpicMiddleware, combineEpics} from 'redux-observable';
import {AppAction} from "./app-action";
import {UserActions} from "../user/actions";
import {ActivityActions} from "../service-activity/actions";
import {ErrorActions} from "../error/actions";
import {appState, INITIAL_STATE} from "./state";
import {userReducer} from "../user/reducer";
import {errorReducer} from "../error/reducer";
import {activityReducer} from "../service-activity/reducer";
import {UserState} from "../user/state";
import {ErrorState} from "../error/state";


@Injectable()
export class appStore {

    userActions: UserActions;
    errorActions: ErrorActions;
    activityActions: ActivityActions;
    epicMiddleware: EpicMiddleware<any>;

    private store: NgRedux<appState>;
    private epicRegistry: Epic<any>[] = [];
    private epic$: BehaviorSubject<Epic<any>>;

    constructor() {
        this.store = new NgRedux<appState>();
        this.userActions = new UserActions(this);
        this.errorActions = new ErrorActions(this);
        this.activityActions = new ActivityActions(this);

        // handle devtools
        let enhancers: StoreEnhancer<appState>[] = [];
        let devTools = new DevToolsExtension(null, this.store);
        if (devTools.isEnabled()) {
            enhancers.push(devTools.enhancer());
        }

        // handle reducers
        let globalReducers = combineReducers<appState>({
            user: userReducer,
            error: errorReducer,
            activity: activityReducer
        });

        // Handle EPICS, first create a BehaviorSubject to enable RXJS operators
        this.epic$ = <BehaviorSubject<Epic<any>>>new BehaviorSubject(combineEpics(...this.epicRegistry));

        // rootEpic acts as a kinda delegate via mergeMap and appending EPICs with next operator, @see registerMiddleware.
        const rootEpic = (action$: any, store: any) =>
            this.epic$.mergeMap((epic: Epic<any>) => {
                    return epic(action$, store);
                }
            );

        // register rootEpic
        this.epicMiddleware = createEpicMiddleware(rootEpic);
        // configure store with all the stuff
        this.store.configureStore(globalReducers, INITIAL_STATE, [this.epicMiddleware], enhancers);

    }

    /**
     * dispatch action to global store.
     * @param action
     */
    dispatch<A extends AppAction>(action: A) {
        this.store.dispatch(action);
    }

    /**
     * register middleware functions at any time.
     * Each middleware EPIC will be only registered once.
     * @param epics List of EPIC
     */
    registerMiddleware(...epics: Epic<any>[]) {
        if (epics && epics.length > 0) {
            for (let epic of epics) {
                // don't add an epic that is already registered/running
                if (this.epicRegistry.indexOf(epic) === -1) {
                    this.epicRegistry.push(epic);
                    // to get mergeMap executing the added EPIC
                    this.epic$.next(epic);
                }
            }
        }
    };

    // User Store Observable
    selectUserState(): Observable<UserState> {
        return this.store.select((s: appState) => s.user);
    }

    // Activity Store Observable
    selectActivityState(): Observable<ActivityState> {
        return this.store.select((s: appState) => s.activity);
    }

    // Error Store Observable
    selectErrorState(): Observable<ErrorState> {
        return this.store.select((s: appState) => s.error);
    }

}