// make sure our local state,list of todo from form, is being passed through correctly
// result: our reducer is concatenating new values every time the form is submitted
export default function manageTodo( state = {
  todos: [],
}, action) {
  switch (action.type){
    case 'ADD_TODO':
      console.log({ todos: state.todos.concat(action.payload.text)
  })
      return {todos: state.todos.concat(action.payload.text )}
    default:
      return state
  }
}
