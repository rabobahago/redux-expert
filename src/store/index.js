import { createStore, combineReducers } from 'redux'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'
import dayReducer from './reducers/dayReducer'

const allReducers = combineReducers({
  person: personReducer,
  skill: gameReducer,
  week: dayReducer,
})
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default store
