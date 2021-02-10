import './App.css'
import store from './store/index'
import update_person from './store/actions/personActions'
import update_game from './store/actions/gameActions'
import update_day from './store/actions/dayInWeek'
import { connect } from 'react-redux'
const App = () => {
  return (
    <div className="App">
      <h2>Redux expect</h2>
      Person Name: {store.getState().person.name}
      <button onClick={() => store.dispatch(update_person())}>
        update person
      </button>
      <br />
      Game Name: {store.getState().skill.game}
      <button onClick={() => store.dispatch(update_game())}>update game</button>
      <br />
      Day in a Week: {store.getState().week.day}
      <button onClick={() => store.dispatch(update_day())}>update day</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App)
