import { AppAction } from '../store/app-action';
import { ErrorActions } from './actions';
import {INITIAL_STATE, ErrorState, AppError} from './state';


export function errorReducer(state = INITIAL_STATE, action: AppAction): ErrorState {
  switch (action.type) {
    case ErrorActions.ERROR_ADD: {
      let errorsAdded: AppError[] = <AppError[]>action.payload ? <AppError[]>action.payload : [];
      return Object.assign(Object.assign({}, state), {
        errors: state.errors.concat(errorsAdded),
      });
    }
    // tslint:disable-next-line - Disables all rules for the following line
    case ErrorActions.ERROR_CLEAR: {
      return Object.assign({}, {
        errors: <AppError[]>[]
      });
    }
    // tslint:disable-next-line - Disables all rules for the following line
    case ErrorActions.ERROR_TAIL: {
      let errors: AppError[] = state.errors ? state.errors : [];
      let tail: number = errors.length >= action.payload ? action.payload : errors.length;
      let begin = errors.length - tail;
      return Object.assign(Object.assign({}, state), {
        errors: <AppError[]>errors.slice(begin)
      });
    }
    // tslint:disable-next-line - Disables all rules for the following line
    default:
      return state;
  }
}
