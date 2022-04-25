import React from 'react'
import Sidebar from './../Sidebar/Sidebar';
import './style.css'
import Footer from './../Footer/Footer';
import Logo from './../Logo/Logo';
const ContactUs = ({hide}) => {
  return (
    <Sidebar>
      <Logo />
      <div className="contactUs">
        <div className="content" onMouseEnter={()=>hide()}>
          <h2 className='text-center'>
          CONTACT US

          </h2>

          <p className='lead'>
          Any question or remarks? Just write us a message!
          </p>

          <div className="form">
            <div className="contactInfo">
              <div className="bgc">
                <h2>Contact Information</h2>
                <p className='lead'>Fill up the form and our Team will get back to you within 24 hours</p>

                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z"  />
</svg>
                &nbsp;  &nbsp;     &nbsp; Haddah,Sanaa,YEMEN</span>



                <span> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M39.03125 47C39.015625 47 39 47 38.984375 47C31.46875 46.753906 22.664063 39.46875 16.597656 33.398438C10.523438 27.328125 3.238281 18.519531 3.003906 11.039063C2.917969 8.414063 9.359375 3.746094 9.425781 3.699219C11.097656 2.535156 12.953125 2.949219 13.714844 4.003906C14.230469 4.71875 19.113281 12.117188 19.644531 12.957031C20.195313 13.828125 20.113281 15.125 19.425781 16.425781C19.046875 17.148438 17.789063 19.359375 17.199219 20.390625C17.835938 21.296875 19.519531 23.519531 22.996094 26.996094C26.476563 30.472656 28.695313 32.160156 29.605469 32.796875C30.636719 32.207031 32.847656 30.949219 33.570313 30.570313C34.851563 29.890625 36.140625 29.804688 37.019531 30.34375C37.917969 30.894531 45.296875 35.800781 45.976563 36.273438C46.546875 36.675781 46.914063 37.363281 46.988281 38.164063C47.058594 38.972656 46.808594 39.828125 46.289063 40.574219C46.246094 40.636719 41.632813 47 39.03125 47Z"  />
</svg>
            &nbsp;     &nbsp;     &nbsp; +967 41 29 39</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path d="M10.5 8C6.9280619 8 4 10.928062 4 14.5L4 33.5C4 37.071938 6.9280619 40 10.5 40L37.5 40C41.071938 40 44 37.071938 44 33.5L44 14.5C44 10.928062 41.071938 8 37.5 8L10.5 8 z M 10.5 11L37.5 11C38.093018 11 38.640276 11.157774 39.126953 11.412109L24 19.589844L8.8730469 11.412109C9.3597237 11.157774 9.9069817 11 10.5 11 z M 10 18.84375L22.572266 25.638672C23.018266 25.879672 23.509 26 24 26C24.491 26 24.981734 25.879672 25.427734 25.638672L38 18.84375L38 36.951172C37.835551 36.974343 37.671413 37 37.5 37L10.5 37C10.328587 37 10.164449 36.974343 10 36.951172L10 18.84375 z" />
</svg>
       &nbsp;        &nbsp;  &nbsp;       
                  info@petroyemmed.com</span>

                <button className='btn btn-anas  mt-5'>Our Location by google</button>
              </div>
            </div>

<div className="sendMessage">

<form action="">

<div className="input-group ">
  <input type="text" placeholder="First Name"  className="form-control"/>
             
</div>

<div className="input-group ">
  <input type="text" placeholder="Last Name" className="form-control"/>
             
</div>

<div className="input-group ">
  <input type="text" placeholder="Mail" className="form-control"/>
             
</div>

<div className="input-group ">
  <input type="text" placeholder="Subject" className="form-control"/>
             
</div>


<div className="input-group textarea1">
  <label htmlFor="textarea">Message</label>
  <textarea type="text" placeholder="Write your message here" className="form-control"/>
             
</div>

<button className='btn btn-anas'>Send Message</button>

</form>
 </div>


          </div>
<Footer />
        </div>

      </div>
    </Sidebar>
  )
}

export default ContactUs