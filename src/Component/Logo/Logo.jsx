import React from 'react'
import './style.css';
import Img from './img/Petro Yem Med logo.png'
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/petro-yem-med'>

      <img src={Img} alt="" />
      </Link>
    </div>
  )
}

export default Logo