import React, { Children, createContext, useReducer, useState } from 'react'
import { blogReducer } from '../utils/reducer';
import { blogState } from '../utils/state';

export const Blogs = createContext();

export default function BlogContext({children}) {

  const [state,dispatch] = useReducer(blogReducer,blogState);

  return (
    <Blogs.Provider value={{state,dispatch}}>
        {children}
    </Blogs.Provider>
  )
}
