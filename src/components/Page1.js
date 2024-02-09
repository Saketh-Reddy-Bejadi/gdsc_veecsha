import React from 'react';
import "./Page1.css"
import { Link } from 'react-router-dom';

export const Page1 = () => {
  return (
    <div id='Home' className='Page1'>
        <div  className='Con1'>
          <p className='Head1' >Introducing <span className='brnd' >Veecsha</span></p>
          <p className="Body1">
          Welcome to Veecsha - Where Tech Learning Feels Like a Breeze! 🎓✨<br/>
          In a world buzzing with tech complexities, Veecsha is your shortcut to expertise without the overload. Bid farewell to the confusion and embrace a straightforward journey to mastering the essential tech know-how.
          </p>
          <div className='Buttons'>
            <Link to="/WebDev" className='navBtn btns webBtn' >Web Development🔥</Link>
            <Link to="/DSA" className='navBtn btns dsaBtn'>Data Structures & Algorithms♾️</Link>
          </div>
        </div>
    </div>
  )
}
