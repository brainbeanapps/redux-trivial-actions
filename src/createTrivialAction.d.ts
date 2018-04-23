import { Action, ActionMeta, ActionFunction0, ActionFunction1, ActionFunction2, ActionFunction3, ActionFunction4, ActionFunctionAny } from 'redux-actions'

export interface IReduxTrivialAction<TActionFunction> {
  readonly PERFORM: string,
  perform: TActionFunction
}

export function createTrivialAction(
    actionType: string
): IReduxTrivialAction<ActionFunction0<Action<void>>>

export function createTrivialAction<Payload>(
    actionType: string,
    payloadCreator: ActionFunction0<Payload>
): IReduxTrivialAction<ActionFunction0<Action<Payload>>>

export function createTrivialAction<Payload, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>
): IReduxTrivialAction<ActionFunction1<Arg1, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): IReduxTrivialAction<ActionFunction2<Arg1, Arg2, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): IReduxTrivialAction<ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): IReduxTrivialAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>>

export function createTrivialAction<Payload>(
    actionType: string
): IReduxTrivialAction<ActionFunction1<Payload, Action<Payload>>>

export function createTrivialAction<Payload, Meta>(
    actionType: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>
): IReduxTrivialAction<ActionFunctionAny<ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>
): IReduxTrivialAction<ActionFunction1<Arg1, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>
): IReduxTrivialAction<ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>
): IReduxTrivialAction<ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>
): IReduxTrivialAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>>
