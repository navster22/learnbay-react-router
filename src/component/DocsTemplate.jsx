import React from 'react'
import { Outlet } from 'react-router-dom'
import DocsSidebar from './docs-components/DocsSidebar'

export default function DocsTemplate() {
  return (
    <div className='docsComponent'>
    <div className='sideBar'>
        <DocsSidebar />
    </div>
    <div className='componentArea'>
        <Outlet />
    </div>
    </div>
  )
}
