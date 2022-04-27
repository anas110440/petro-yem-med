import React from 'react'
import './style.css'
import IMG from './image/DSC01386.jpg'
import { Link } from 'react-router-dom';


const Home = ({hide}) => {
  return (
    <Link to='/landing-page'>

    <div className='homePage'>
      <div className="content">

      <img src={IMG} alt="" onMouseEnter={()=>hide()} />


      <div className='rgba'>

<div className="box">

<h1>We are ready</h1>

<hr />
  <p className='lead'>

to start your project, Contact us now !
  </p>
<Link to='/landing-page'>

  <button className='btn btn-anas'>
Get a Quote
  </button>
</Link>
</div>

      </div>
      </div>



    </div>
    </Link>
  )
}

export default Home