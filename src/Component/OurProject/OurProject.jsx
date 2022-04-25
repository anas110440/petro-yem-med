import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import Img from './ourProjectImage/aref 191.JPG'
import Img1 from './ourProjectImage/8.png'
import Img2 from './ourProjectImage/aref 212.JPG'
import Img3 from './ourProjectImage/DSC00508.jpg'
import Img4 from './ourProjectImage/DSC00564.jpg'
import Img5 from './ourProjectImage/DSC02845.jpg'
import Img6 from './ourProjectImage/7.png'
import Img7 from './ourProjectImage/9.png'
import Img8 from './ourProjectImage/9.jpg'
import Img9 from './ourProjectImage/10.jpg'
import Img10 from './ourProjectImage/11.jpg'
import Img11 from './ourProjectImage/12.jpg'
import Img12 from './ourProjectImage/13.jpg'
import Img13 from './ourProjectImage/14.jpg'
import Img14 from './ourProjectImage/15.jpg'
import Img15 from './ourProjectImage/16.jpg'
import Img16 from './ourProjectImage/17.jpg'
import Img17 from './ourProjectImage/18.jpg'
import Footer from './../Footer/Footer';
import Logo from './../Logo/Logo';


const OurProject = ({hide}) => {
  return (
    <Sidebar>
      <Logo />
<div className="ourProject">
<div className='content' onMouseEnter={()=>hide()}>

        <h2 className='text-center'>
          OUR PROJECT
        </h2>

        <hr />

        <p className='lead'>
          Have you decided to a project with us?
        </p>

<div className="boxes">


  <div className="box">
  <img src={Img1} alt="" className='img1' />

  <div className="overlay">
  <div className="text">16 INCH GAS PIPELINE FROM RAYDAN TO SAFER CPU FACILITY</div>
  </div>
  </div>    
  
  
  
  
  <div className="box">
  <img src={Img} alt="" className='img1' />

  <div className="overlay">
  <div className="text">8 INCH GAS PIPELINE CONSTRUCTION FROM AL-SHURA TO SAFER CPU FACILITY</div>
  </div>
  </div>  
  
  
  
    <div className="box">
<img src={Img2} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CONSTRUCTION , COMMISSIONING AND START UP OF NEW EXPANSION TRAIN AT SAFER CPU FACILITY IN 2012</div>
  </div>
  </div>  
  
  
  
  <div className="box">
<img src={Img3} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CONSTRUCTION OF NEW PIPERACK FOR SAFER NEW EXPANSION PRODUCTION TRAIN IN 2012</div>
  </div>
  </div>

    <div className="box">
<img src={Img4} alt="" className='img1' />

  <div className="overlay">
  <div className="text">FABRICATION AND INSTALLATION OF 36 SLOTS MANIFOLD FOR SEPOC NEW EXPANSION PRODUCTION TRAIN IN 2012</div>
  </div>
  </div>


    <div className="box">
<img src={Img5} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CONSTRUCTION OF RAYDAN NEW PRODUCTION MANIFOLD AND FLARE HEADER IN 2013</div>
  </div>
  </div>


    <div className="box">
<img src={Img6} alt="" className='img1' />

  <div className="overlay">
  <div className="text">ELECTRICAL PROJECT FOR SEPOC – YGC LPG EXPANSION IN 2012</div>
  </div>
  </div>

    <div className="box">
<img src={Img7} alt="" className='img1' />

  <div className="overlay">
  <div className="text">16 INCH PIG RECEIVER AT SAFER CPU FACILITY</div>
  </div>
  </div>

    <div className="box">
<img src={Img8} alt="" className='img1' />

  <div className="overlay">
  <div className="text">RAYDAN HOUSING PROJECT</div>
  </div>
  </div>

    <div className="box">
<img src={Img9} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CMG MAINTENANCE OFFICES BUILDING</div>
  </div>
  </div>


      <div className="box">
<img src={Img10} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CPU ACCOMMODATION BUILDING UNIT-A</div>
  </div>
  </div>


      <div className="box">
<img src={Img11} alt="" className='img1' />

  <div className="overlay">
  <div className="text">TOTAL BLOCK -10B NEW EXPORT PIPELINE PROJECT</div>
  </div>
  </div>

     <div className="box">
<img src={Img12} alt="" className='img1' />

  <div className="overlay">
  <div className="text">SHAROOUF WELL LOCATION PROJECT JOINTLY WITH DOVE ENERGY</div>
  </div>
  </div>

       <div className="box">
<img src={Img13} alt="" className='img1' />

  <div className="overlay">
  <div className="text">MAINTENANCE WAREHOUSE STRUCTURE</div>
  </div>
  </div>

       <div className="box">
<img src={Img14} alt="" className='img1' />

  <div className="overlay">
  <div className="text">EPF-3 HEATER REPAIR (H-101)</div>
  </div>
  </div>

       <div className="box">
<img src={Img15} alt="" className='img1' />

  <div className="overlay">
  <div className="text">CPU UPSTREAM PROJECT JOINTLY WITH YLNG</div>
  </div>
  </div>

       <div className="box">
<img src={Img16} alt="" className='img1' />

  <div className="overlay">
  <div className="text">TASLA WELL LOCATION PROJECT JOINTLY WITH OIL SEARCH</div>
  </div>
  </div>

       <div className="box">
<img src={Img17} alt="" className='img1' />

  <div className="overlay">
  <div className="text">YGC ADDITIONAL LPG STORAGE &amp; LOADING</div>
  </div>
  </div>




<Footer/>

</div>

  


</div>



        </div>
    </Sidebar>
  )
}

export default OurProject