import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import Img from './image/aref 221.JPG'
import Logo from './../Logo/Logo';
const HowWeAre = () => {
  return (
    <Sidebar>
<Logo />
    <div className="whoWeAre">
      <div className='content'>

        <h2 className='text-center'>
          Who We Are !
        </h2>
<hr />


<div className="form">
  <div className="left">
  
    <p className="lead">PETRO YEM MED was established and registered on 01 January 2009, with Abdulrab Hassan Rubeiya as General Manager . </p>

    <p className="lead">PETRO YEM MED is specialized Construction company actively with oil 
    &amp; 
    gas Companies engaged in Engineering, Procurement, Installation and Commissioning (EPC) of Process, Mechanical, Electrical, Instrumentation and Control.</p>
    <p className="lead">Projects of execution , in addition to specialized field services team comprising construction, commissioning and maintenance activities. </p>
  
  
  </div>
  <div className="right">
    <div className="img">
      <img src={Img} alt="" />
      <div className="pos"></div>
    </div>
    <div className="textf">
     <p> We have a full-fledged workshop facility for Construction, Survey and Supply. With our expertise, we provide a wide range of engineering, Construction and project management skills to serve our clients in developing new facilities, as well as effectively applying efficient technologies to upgrade and expand the existing facilities.</p>
    </div>

       <svg className='top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path  d="M1.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H1.5z"/>
            
        
            <g>
              <path  d="M23.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H23.5z"/>
             
              </g></svg>

            



  </div>


</div>







        </div>
    </div>

    </Sidebar>
  )
}

export default HowWeAre