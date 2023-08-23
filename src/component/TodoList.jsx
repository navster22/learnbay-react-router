import React from 'react'

export default function TodoList({state}) {
  return (
    <div>
        {state.todos.map((item)=>{
            return <p>{item}</p>
        })}
    </div>
  )
}
