import { UPDATE_PERSON } from '../actions/personActions'
const personReducer = (state = { name: 'rabo' }, { type, payload }) => {
  switch (type) {
    case UPDATE_PERSON:
      return {
        ...state,
        name: payload,
      }
    default:
      return state
  }
}
export default personReducer
