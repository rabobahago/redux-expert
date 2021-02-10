import './App.css'
import store from './store/index'
import update_person from './store/actions/personActions'

function App() {
  return (
    <div className="App">
      <h2>Redux expect</h2>
      Person Name: {store.getState().person.name}
      <button onClick={() => store.dispatch(update_person())}>
        change person
      </button>
    </div>
  )
}

export default App
