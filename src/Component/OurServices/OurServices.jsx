import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import Img from "./image/1.png"
import Img2 from "./image/2.png"
import Img3 from "./image/3.png"
import Img4 from "./image/4.png"
import Img5 from "./image/5.png"
import Img6 from "./image/6.png"
import Footer from './../Footer/Footer';
import Logo from '../Logo/Logo';
const OurServices = () => {
  return (
    <Sidebar>
      <Logo />
      <div className="ourService">
        <div className='content'>

        <h2 className='text-center'>
          OUR SERVICES


        </h2>

        <hr />

        <p className='lead'>
We did a great job with companies. You can be next to work with!
        </p>



<div className="boxes">


  <div className="box">
  <img src={Img} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
Our company provides the following services for projects:
    <br />
<br />
a. Topographical Survey.
<br />

b. Well location &amp; Piping Servey.
<br />

c. Construction Survey.


  </p>
  </div>
  </div>  


  <div className="box">
  <img src={Img2} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
    construction industry and extend our services to include:
    <br />
    <br />
a. Mechanical and Civil construction projects.
    <br />

b. Pipeline fabrication and installation.
    <br />

c. Electrical and instrumentation project execution.

  </p>
  </div>
  </div>  


  <div className="box">
  <img src={Img3} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
    Our company provides the following engineering services:
    <br />
    <br />

a. Civil, Mechanical and Electrical Design.
    <br />

b. Process and Piping Design.
  </p>
  </div>
  </div>  


  <div className="box">
  <img src={Img4} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
    
    Our company provides the following services for Oil &amp; Gas projects:
    <br />
    <br />

a. Topographical Survey.
    <br />

b. Well location &amp; Piping Servey.
    <br />

c. Construction Survey.
  </p>
  </div>
  </div>  


  <div className="box">
  <img src={Img5} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
Our company is specialized in the supply of the below materials required for the Oil and Gas industry:
<br />
<br />
a. Valves, Pipes and fittings.
<br />

b. Electrical Materials.
<br />

c. Instrumentation materials.
    </p>
  </div>
  </div>  


  <div className="box">
  <img src={Img6} alt="" className='img1' />

  <div className="overlay">
  <p className="text">
    
    Our company provides the following services for Oil &amp; Gas projects:
<br />
<br />
a. Topographical Survey.
<br />

b. Well location &amp; Piping Servey.
<br />

c. Construction Survey.
  </p>
  </div>
  </div>  

  </div>












        
        </div>
        <Footer />
      </div>
    </Sidebar>
  )
}

export default OurServices