import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import IMG from './image/DSC01386.jpg'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Footer from './../Footer/Footer';

const Home = () => {
  return (
  <Sidebar>
    
      <Logo />
    <div className='homePage'>
      <div className="content">

      <img src={IMG} alt="" />

      <img src={IMG} alt="" className='image' />

      <div className='rgba'>

<div className="box">

  <h2>We are ready</h2>

<hr />
  <p className='lead'>

to start your project, Contact us now !
  </p>
<Link to='/contactus'>

  <button className='btn btn-anas'>
Get a Quote
  </button>
</Link>
</div>

      </div>
      </div>
    <Link to="/how-we-are">
      <div className="scroll">
        <div className='mouse'></div>

      </div>
    </Link>


    </div>
     <Footer />
  </Sidebar>    
  )
}

export default Home