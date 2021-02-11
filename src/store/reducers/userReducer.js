import { UPDATE_USER } from '../actions/usersFetch'
const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return [...state, payload]
    default:
      return state
  }
}
export default userReducer
