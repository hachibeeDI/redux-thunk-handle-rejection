import {MiddlewareAPI, Action, AnyAction} from 'redux';
import {ThunkMiddleware, ThunkDispatch} from 'redux-thunk'

const defaultCatcher = (v: any) => v;

interface OptionArgument<S, E, A extends Action = AnyAction> {
  extraArgument?: E;
  actionResultHandler(actionResult: any, dispatch: ThunkDispatch<S, E, A>, getState: () => S): any;
}

export default function createThunkWithRejectionHandler<S, E, A extends Action = AnyAction>({extraArgument, actionResultHandler = defaultCatcher}: OptionArgument<S, E, A>): ThunkMiddleware<S, AnyAction, E> {
  const middleware = ({dispatch, getState}: MiddlewareAPI<ThunkDispatch<S, E, A>, S>) => (next: any): any => (action: any): any => {
    if (typeof action === 'function') {
      return actionResultHandler(action(dispatch, getState, extraArgument), dispatch, getState);
    }

    return next(action);
  };
  return middleware as any;
}
