import React from 'react'
import './style.css'
import Img from './clients/1.png'
import Img1 from './clients/2.png'
import Img2 from './clients/3.png'
import Img3 from './clients/Untitled-5.png'
import Img4 from './clients/Untitled-6.png'
import Img5 from './clients/Untitled-7.png'
import Img6 from './clients/Untitled-8.png'
const OurClients = () => {
  return (
    <>
<div className="ourClients" id='ourClients'>
<div className='content' >

        <h2 className='text-center'>
          Take a look at our clients
        </h2>

      
        
<div className="boxes">
  <div className="box">
<img src={Img} alt="" className='img1' />

  <div className="overlay">
  <div className="text">SAFER COMPANY LTD.</div>
  </div>
  </div>
    <div className="box">
<img src={Img1} alt="" className='img2' />

  <div className="overlay">
  <div className="text">OMV COMPANY LTD</div>
  </div>
  </div>
    <div className="box">
<img src={Img2} alt="" className='img3' />

  <div className="overlay">
  <div className="text">YEMEN LNG COMPANY</div>
  </div>
  </div>
    <div className="box">
<img src={Img3} alt="" className='img4' />

  <div className="overlay">
  <div className="text">JHOC</div>
  </div>
  </div>
  
</div>


<div className="boxes dflex ">
  <div className="box">


<img src={Img4} alt="" className='img5' />

  <div className="overlay">
  <div className="text">KUWAIT ENERGY</div>
  </div>


  </div>
    <div className="box">
<img src={Img5} alt="" className='img6' />

  <div className="overlay">
  <div className="text">DOVE ENERGY</div>
  </div>
  </div>
    <div className="box">
<img src={Img6} alt="" className='img7' />

  <div className="overlay">
  <div className="text">TOTAL YEMEN</div>
  </div>
  </div>
</div>


</div>
</div>
    </>
  )
}

export default OurClients