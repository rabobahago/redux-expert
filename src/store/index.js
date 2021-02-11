import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'
import dayReducer from './reducers/dayReducer'
import userReducer from './reducers/userReducer'

const allReducers = combineReducers({
  person: personReducer,
  skill: gameReducer,
  week: dayReducer,
  users: userReducer,
})
const middleware = [thunk]
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
export default store
