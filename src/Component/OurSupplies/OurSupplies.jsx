import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import Footer from './../Footer/Footer';
import Logo from './../Logo/Logo';
const OurSupplies = () => {
  return (
    <Sidebar>

      <div className="ourSupplies">
      <Logo />
        <div className="rgba">


      
          <div className="box">
            <svg className='top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="#ffffffd6" d="M1.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H1.5z"/>
            
        
            <g>
              <path fill="#ffffffd6" d="M23.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H23.5z"/>
             
              </g></svg>

                      <svg className='botoom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="#494949cc" d="M1.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H1.5z"/>
            
        
            <g>
              <path fill="#494949cc" d="M23.5,33.5V18c0-6.604,4.497-11.265,11-11.491v3.115c-4.421,1.371-5,5.181-5,8.376v0.5h9v15H23.5z"/>
             
              </g></svg>
            <h3>OUR SUPPLIES</h3>

            <p className='lead'>SUPPLY OF EQUIPMENT &amp; SUPPORT SERVICE</p>

<hr />
            <span className='lead'>
              I PETRO YEM MED has established a strong repuation in the region as a reliable and cost-effective supplier ofequipment and rental services to the oil and gas, power and industrial sectors. Our experienced and efficient procurment team offer a fast response to our client needs.
            </span>

            <span className='lead'>
              I Our clients include leading companies and organiztion from various sectors including oil and gas, power,
construction, enginerring and govermental bodies, both on a national &amp; regional levels.
            </span>



          </div>




<Footer />
        </div>
        
      </div>

    </Sidebar>
  )
}

export default OurSupplies