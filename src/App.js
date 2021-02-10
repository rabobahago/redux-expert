import './App.css'
import store from './store/index'
import update_person from './store/actions/personActions'
import update_game from './store/actions/gameActions'
import update_day from './store/actions/dayInWeek'
import { connect } from 'react-redux'
const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <h2>Redux expect</h2>
      Person Name: {props.person.name}
      <button onClick={props.updatePerson}>update person</button>
      <br />
      Game Name: {props.skill.game}
      <button onClick={props.updateSkill}>update game</button>
      <br />
      Day in a Week: {props.week.day}
      <button onClick={props.updateWeek}>update day</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    person: state.person,
    skill: state.skill,
    week: state.week,
  }
}
const mapDispatchToProps = (state) => {
  return {
    updatePerson: () => {
      store.dispatch(update_person())
    },
    updateSkill: () => {
      store.dispatch(update_game())
    },
    updateWeek: () => {
      store.dispatch(update_day())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
