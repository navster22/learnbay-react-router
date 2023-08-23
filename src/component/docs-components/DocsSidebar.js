import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function DocsSidebar() {

  const [currentSelected,setCurrentSelected] = useState(1);

  const sidebarItemClick = (e) => {
    setCurrentSelected(e.target.id)
  }

  return (
    <div>
        <Link onClick={(e)=>sidebarItemClick(e)} id='1' className={`sideBarItem ${currentSelected == 1 && 'sideBarItemActive'}`} to="/docs">Setup</Link>
        <Link onClick={(e)=>sidebarItemClick(e)} id='2' className={`sideBarItem ${currentSelected == 2 && 'sideBarItemActive'}`} to="/docs/documents">Documents</Link>
        <Link onClick={(e)=>sidebarItemClick(e)} id='3' className={`sideBarItem ${currentSelected == 3 && 'sideBarItemActive'}`} to="/docs/demo-project">Demo Project</Link>
        <Link onClick={(e)=>sidebarItemClick(e)} id='4' className={`sideBarItem ${currentSelected == 4 && 'sideBarItemActive'}`} to="/docs/tutorial">Tutorial</Link>
    </div>
  )
}
