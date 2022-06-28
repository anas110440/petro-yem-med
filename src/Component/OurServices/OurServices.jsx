import React from 'react'
import './style.css'
import Img from "./image/1.png"
import Img2 from "./image/2.png"
import Img3 from "./image/3.png"
import Img4 from "./image/4.png"
import Img5 from "./image/5.png"
import Img6 from "./image/6.png"
const OurServices = () => {
  return (
    <>
      <div className="ourService" id='ourService'>
        <div className='content' >

        <h2 className='text-center'>
          OUR SERVICES


        </h2>

        <hr />

     



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
    
  OUR COMPANY CAN SUPPLY HIGHLY QUALIFIED PROJECT MANAGERS, CONSTRUCTION MANAGEMENT TEAM ,SUPERVISORS AND IN ALL THE CONSTRUCTION DISCIPLINES . 
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
    

OUR COMPANY CAN SUPPLY SKILLED MANPOWER FROM THE CONSTRUCTION PROJECT LIKE : 
<br />
<br />
A- CIVIL MANPOWER 
<br />

B- MECHANICAL AND PIPELINE FABRICATORS 
<br />

C-WELDERS AND HELPERS 
<br />

D-ELECTRICAL AND INSTRUMENT TECHNICIANS 
<br />

E-PAINTERS AND HELPERS
  </p>
  </div>
  </div>  

  </div>












        
        </div>
      </div>
    </>
  )
}

export default OurServices