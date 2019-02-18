import { Action, AnyAction } from 'redux';
import { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
interface OptionArgument<S, E, A extends Action = AnyAction> {
    extraArgument?: E;
    actionResultHandler(actionResult: any, dispatch: ThunkDispatch<S, E, A>, getState: () => S): any;
}
export default function createThunkWithRejectionHandler<S, E, A extends Action = AnyAction>({ extraArgument, actionResultHandler }: OptionArgument<S, E, A>): ThunkMiddleware<S, AnyAction, E>;
export {};
