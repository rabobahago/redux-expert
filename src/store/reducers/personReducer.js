const personReducer = (state = { name: 'rabo' }, { type, payload }) => {
  //console.log(actions)
  switch (type) {
    case 'UPDATE_PERSON':
      return {
        ...state,
        name: payload,
      }
    default:
      return state
  }
}
export default personReducer
