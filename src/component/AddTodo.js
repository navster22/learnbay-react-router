import React, { useReducer } from 'react'
import { createToDoRecuder } from '../utils/reducer'

export default function AddTodo({dispatchToDos}) {

  const [state,dispatch] = useReducer(createToDoRecuder,{todo: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchToDos({type: 'ADD', payload: state.todo})
  }

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input onChange={(e)=>dispatch({type: 'ADD', payload: e.target.value})} value={state.todo}></input>
            <button>Add</button>
        </form>
    </div>
  )
}
