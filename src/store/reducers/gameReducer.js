import { UPDATE_GAME } from '../actions/gameActions'
const gameReducer = (state = { game: 'basketball' }, { type, payload }) => {
  switch (type) {
    case UPDATE_GAME:
      return {
        ...state,
        game: payload,
      }
    default:
      return state
  }
}
export default gameReducer
