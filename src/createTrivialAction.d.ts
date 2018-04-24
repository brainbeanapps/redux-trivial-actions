import { Action, ActionMeta, ActionFunction0, ActionFunction1, ActionFunction2, ActionFunction3, ActionFunction4, ActionFunctionAny } from 'redux-actions'

export interface ITrivialAction<TActionFunction> {
  readonly PERFORM: string,
  perform: TActionFunction
}

export type TrivialAction<TActionFunction> = ITrivialAction<TActionFunction> & TActionFunction

export function createTrivialAction(
  actionType: string
): TrivialAction<ActionFunction0<Action<void>>>

export function createTrivialAction<Payload>(
  actionType: string,
  payloadCreator: ActionFunction0<Payload>
): TrivialAction<ActionFunction0<Action<Payload>>>

export function createTrivialAction<Payload, Arg1>(
  actionType: string,
  payloadCreator: ActionFunction1<Arg1, Payload>
): TrivialAction<ActionFunction1<Arg1, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2>(
  actionType: string,
  payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): TrivialAction<ActionFunction2<Arg1, Arg2, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2, Arg3>(
  actionType: string,
  payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): TrivialAction<ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>>

export function createTrivialAction<Payload, Arg1, Arg2, Arg3, Arg4>(
  actionType: string,
  payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): TrivialAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>>

export function createTrivialAction<Payload>(
  actionType: string
): TrivialAction<ActionFunction1<Payload, Action<Payload>>>

export function createTrivialAction<Payload, Meta>(
  actionType: string,
  payloadCreator: ActionFunctionAny<Payload>,
  metaCreator: ActionFunctionAny<Meta>
): TrivialAction<ActionFunctionAny<ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1>(
  actionType: string,
  payloadCreator: ActionFunction1<Arg1, Payload>,
  metaCreator: ActionFunction1<Arg1, Meta>
): TrivialAction<ActionFunction1<Arg1, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2>(
  actionType: string,
  payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
  metaCreator: ActionFunction2<Arg1, Arg2, Meta>
): TrivialAction<ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2, Arg3>(
  actionType: string,
  payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
  metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>
): TrivialAction<ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>>

export function createTrivialAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
  actionType: string,
  payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
  metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>
): TrivialAction<ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>>
