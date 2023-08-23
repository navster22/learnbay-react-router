import React, { useContext } from 'react'
import { Blogs } from '../context/BlogContext'
import { useNavigate } from 'react-router-dom'

export default function About() {

  const {state,dispatch} = useContext(Blogs);

  const navigate = useNavigate()

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newBlog = {
        id: state.length,
        title: e.target.elements[0].value,
        description: e.target.elements[1].value,
    }
    dispatch({type: 'ADD', payload: newBlog})
    e.target.elements[0].value = ""
    e.target.elements[1].value = ""
    navigate("/")
  }

  return (
    <div className='aboutPage'>
        <h2>Add new blog</h2>
        <button onClick={()=>navigate("/add-blog/last-blog")}>Last Blog</button>
        <form className='addBlogForm' onSubmit={e => onSubmitForm(e)}>
            <input type='text' placeholder='Enter blog title' required></input>
            <textarea placeholder='Enter blog description' required></textarea>
            <input type='submit' value="Submit"></input>
        </form>
    </div>
  )
}
