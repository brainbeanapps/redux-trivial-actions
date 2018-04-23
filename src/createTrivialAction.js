import { createAction } from 'redux-actions'

export default function createTrivialAction (type, ...params) {
  const actionCreator = createAction(`${type}/PERFORM`, ...params)

  return {
    PERFORM: actionCreator.toString(),
    perform: actionCreator,
    toString: () => {
      return actionCreator.toString()
    }
  }
}
