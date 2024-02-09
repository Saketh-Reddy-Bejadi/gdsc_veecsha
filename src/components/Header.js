import React from 'react'
import Menu from './Menu'
import { SideBar } from './SideBar';
import { Link } from 'react-router-dom';


export const Header = ({MenuOpen,toggleMenu,viewBox,isOpened}) => {
  return (
    <header>
        <div className='navbar'>
          <a href='/' id='brnd' className='brnd' >Veecsha</a>
          <div className='NavPart2' >
          <ul>
            <Link to="/WebDev"><li className='navBtn webBtn' >Web Development🔥</li></Link>
            <Link to="/DSA"><li className='navBtn dsaBtn'>Data Structures & Algorithms♾️</li></Link>
          </ul>
          <Menu MenuOpen={MenuOpen} toggleMenu={toggleMenu} isOpened={isOpened}/>
          <SideBar MenuOpen={MenuOpen} toggleMenu={toggleMenu} viewBox={viewBox}/>
          </div>
        </div>
    </header>
  )
}
