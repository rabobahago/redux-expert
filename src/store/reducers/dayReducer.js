import { UPDATE_DAY } from '../actions/dayInWeek'
const dayReducer = (state = { day: 'monday' }, { type, payload }) => {
  switch (type) {
    case UPDATE_DAY:
      return {
        ...state,
        day: payload,
      }
    default:
      return state
  }
}

export default dayReducer
