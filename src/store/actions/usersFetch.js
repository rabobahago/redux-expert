export const UPDATE_USER = 'UPDATE_USER'

// const update_user = () => {
//   return {
//     type: UPDATE_USER,
//     payload: '',
//   }
// }
// export default update_user
const fetch_user = (dispatch) => {
  fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }))
}
export default fetch_user
