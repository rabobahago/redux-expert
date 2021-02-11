import './App.css'
import update_person from './store/actions/personActions'
import update_game from './store/actions/gameActions'
import update_day from './store/actions/dayInWeek'
import fetch_user from './store/actions/usersFetch'
import { connect } from 'react-redux'
const App = (props) => {
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
      <br />
      Users:{' '}
      {props.users.length === 0 ? (
        <p>No User Found</p>
      ) : (
        props.users.map((user) => <p>{user.id}</p>)
      )}
      {console.log(props.users)}
      <button onClick={props.updateUser}>update user</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
    skill: state.skill,
    week: state.week,
    users: state.users,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updatePerson: () => {
      dispatch(update_person())
    },
    updateSkill: () => {
      dispatch(update_game())
    },
    updateWeek: () => {
      dispatch(update_day())
    },
    updateUser: () => {
      dispatch(fetch_user)
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
