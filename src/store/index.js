import { createStore, combineReducers } from 'redux'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'

const allReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
})
const store = createStore(allReducers)
export default store
