import React, { useState } from 'react'
import './style.css'
import Img1 from './img/1.jpg'
import Img2 from './img/2.png'
import Img3 from './img/3.jpg'
import Img4 from './img/4.png'
import Img5 from './img/5.jpg'
import Img6 from './img/6.png'
const WhyUs = () => {
  const [info1 , setInfo1] = useState(false)
  const [info2 , setInfo2] = useState(true)
  const [info3 , setInfo3] = useState(true)

const pic1 = ()=>{
  setInfo1(false)
  setInfo2(true)
  setInfo3(true)
}
const pic2 = ()=>{
  setInfo1(true)
  setInfo2(false)
  setInfo3(true)
}
const pic3 = ()=>{
  setInfo1(true)
  setInfo2(true)
  setInfo3(false)
}

  return (
    <>
<div className="whyUs" id='whyUs'>
        <div className='content'>

        <h2 className='text-center'>
          WHY US !


        </h2>

        <hr />

        <p className='lead'>
          At PETRO YEM MED. Our pirpose is to help our clients to thrive-our clients.
        </p>


        <div className="boxes">
          <div className="box" onClick={()=>pic1()} onTouchEnd={()=>pic1}>
            <img src={Img1} alt="" />
            <div className="rgba">
            <p>
              Healt &amp; Safety
            </p>
            </div>

            <img src={Img2} alt="" className='icon' />
          </div>

          <div className="box" onClick={()=>pic2()} onTouchEnd={()=>pic2}>
            
            <img src={Img3} alt="" />
            <div className="rgba">
 <p>
              Environment
            </p>
            </div>

            <img src={Img4} alt="" className='icon' />
          </div>
          
          <div className="box" onClick={()=>pic3()} onTouchEnd={()=>pic3}>
            
            <img src={Img5} alt="" />
            <img src={Img6} alt="" className='icon' />
            <div className="rgba">
               <p>
              Quality
            </p>
            </div>
          </div>












          
        </div>



<div className="info" hidden={info1}>

<div className="texts">
<p>
The health, safety and well-being of our people are our first priority and we are committed to upholding a high standard of health and safety with zero tolerance to risks and accidents.
PETRO YEM MED For Engineering , Construction &amp; Oil Field Services are proud to have received numerous awards and certificates of appreciate which reflect our commitment to working under national and international regulations and standards and maintaining a safe working environment.We carry out Habitual Internal Safety Audits to ensure staff compliance with internal and client safety policies and procedures.
</p>
</div>
<div className="pic">
<div className="box">
<img src={Img1} alt="" />
<div className="rgba">

</div>

<img src={Img2} alt="" className='icon' />
</div>
</div>


</div>



<div className="info" hidden={info2}>

<div className="texts">
    <p>
PETRO YEM MED For Engineering ,Construction &amp; Oil Field Services are proud to be a part of the development of the State of Yemen which is experiencing rapid growth in infrastructure and expanding industries to meet the increasing demand for services and resources.
We are working closely together with our clients and partners across all areas of our business to limit our impact on the environment and to prevent environmental incidents.
PETRO YEM MED For Engineering,Construction &amp; Oil Field Services always ensure that our environmental management system and procedures exceeds the legal standards and requirements.
    </p>
</div>
<div className="pic">
<div className="box">
<img src={Img3} alt="" />
<div className="rgba">

</div>

<img src={Img4} alt="" className='icon' />
</div>
</div>


</div>



<div className="info" hidden={info3}>

<div className="texts">
    <p>
In keeping with our commitment to QA/QC standards, we at PETRO YEM MED For Engineering, Construction &amp; Oil Field Services are %100 dedicated to providing quality services for our clients.
We go beyond the basics and are not content with simply meeting minimum project’s quality requirements. This is why we utilize only the most reliable and knowledgeable personnel to ensure the implementation of the highest quality standards
We also ensure the execution of extensive procedures for quality control, in addition to keeping our clients fully informed of all non-conformances and corrective actions.
All our work is carried out under international, accredited ISO9001 standards.
    </p>
</div>
<div className="pic">
<div className="box">
<img src={Img5} alt="" />
<div className="rgba">

</div>

<img src={Img6} alt="" className='icon' />
</div>
</div>


</div>



        

</div>
</div>
    </>
  )
}

export default WhyUs