import { createAction } from 'redux-actions'

export default function createTrivialAction (type, ...params) {
  const actionCreator = createAction(`${type}/PERFORM`, ...params)

  return Object.assign(actionCreator, {
    PERFORM: actionCreator.toString(),
    perform: actionCreator
  })
}
