import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {

const show=()=>{
      var slider = document.getElementById('slider');
      var open = document.getElementById('open');
      var close = document.getElementById('close');

   
      slider.classList.add('show');
      slider.classList.remove('hide');
      
      open.style.display = "none"
      close.style.display = "block"
}
const hide=()=>{
      
      var slider = document.getElementById('slider');
      var close = document.getElementById('close');
      var open = document.getElementById('open');

        slider.classList.add('hide');
        slider.classList.remove('show');

        

        close.style.display = "none"
        open.style.display = "block"
}

  return (
  <div className="row all">
  <div className="home col-12  "  >
    <div className='slider hide' onMouseEnter={()=>show()} onMouseLeave={()=>hide()} id="slider">

<p className="open" id='open' onTouchEnd={()=>show()} onClick={()=>show()}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M2 13L2 17L48 17L48 13 Z M 2 23L2 27L48 27L48 23 Z M 2 33L2 37L48 37L48 33 Z M 18 41C17.597656 41 17.21875 41.25 17.0625 41.625C16.90625 42 16.996094 42.433594 17.28125 42.71875L24.28125 49.71875C24.476563 49.914063 24.742188 50 25 50C25.257813 50 25.523438 49.914063 25.71875 49.71875L32.71875 42.71875C33.003906 42.433594 33.09375 42 32.9375 41.625C32.785156 41.25 32.402344 41 32 41Z"  />
</svg>  
</p>

<p className="close" id='close' onClick={()=>hide()} onTouchEnd={()=>show()}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M2 13L2 17L48 17L48 13 Z M 2 23L2 27L48 27L48 23 Z M 2 33L2 37L48 37L48 33 Z M 18 41C17.597656 41 17.21875 41.25 17.0625 41.625C16.90625 42 16.996094 42.433594 17.28125 42.71875L24.28125 49.71875C24.476563 49.914063 24.742188 50 25 50C25.257813 50 25.523438 49.914063 25.71875 49.71875L32.71875 42.71875C33.003906 42.433594 33.09375 42 32.9375 41.625C32.785156 41.25 32.402344 41 32 41Z" />
</svg>
</p>


<div className="navItem" id='navItem'  >

  <NavLink to='/home' className='Home' title='Home'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"  />
</svg>

     <span hidden>Home</span>

  </NavLink>







  <NavLink to='/how-we-are' className='HowWeAre' title='Who We Are'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
  <path d="M14 1C6.8 1 1 6.8 1 14L1 28L1 81C1 82.7 2.3 84 4 84C5.7 84 7 82.7 7 81L7 35L121 35L121 81C121 82.7 122.3 84 124 84C125.7 84 127 82.7 127 81L127 14C127 6.8 121.2 1 114 1L14 1 z M 14 7L114 7C117.9 7 121 10.1 121 14L121 29L7 29L7 14C7 10.1 10.1 7 14 7 z M 18 15C16.3 15 15 16.3 15 18C15 19.7 16.3 21 18 21L22 21C23.7 21 25 19.7 25 18C25 16.3 23.7 15 22 15L18 15 z M 34 15C32.3 15 31 16.3 31 18C31 19.7 32.3 21 34 21L38 21C39.7 21 41 19.7 41 18C41 16.3 39.7 15 38 15L34 15 z M 93.900391 81.099609C86.700391 81.099609 80.900391 86.899609 80.900391 94.099609C80.900391 95.599609 81.199609 97.000391 81.599609 98.400391L70 104.69922C67.7 102.39922 64.5 101 61 101C56.1 101 51.899219 103.69961 49.699219 107.59961L39 104.59961L39 104C39 96.8 33.2 91 26 91C18.8 91 13 96.8 13 104C13 106.2 13.5 108.2 14.5 110L2.6992188 121.90039C1.4992188 123.10039 1.4992188 124.99961 2.6992188 126.09961C3.2992188 126.69961 4.0007813 127 4.8007812 127C5.6007812 127 6.3003906 126.69961 6.9003906 126.09961L18.300781 114.5C20.400781 116 23.100391 117 25.900391 117C30.800391 117 34.999219 114.30039 37.199219 110.40039L47.900391 113.5L47.900391 114.09961C47.900391 121.29961 53.700391 127.09961 60.900391 127.09961C68.100391 127.09961 73.900391 121.29961 73.900391 114.09961C73.900391 112.59961 73.599219 111.20078 73.199219 109.80078L84.900391 103.40039C87.300391 105.60039 90.5 107 94 107C96.5 107 98.800781 106.29961 100.80078 105.09961L108.90039 113.19922C109.50039 113.79922 110.3 114.09961 111 114.09961C111.7 114.09961 112.49961 113.79922 113.09961 113.19922C114.29961 111.99922 114.29961 110.1 113.09961 109L105 100.90039C106.2 98.900391 106.90039 96.599609 106.90039 94.099609C106.90039 86.899609 101.10039 81.099609 93.900391 81.099609 z M 94 87C97.9 87 101 90.1 101 94C101 97.9 97.9 101 94 101C90.1 101 87 97.9 87 94C87 90.1 90.1 87 94 87 z M 26 97C29.9 97 33 100.1 33 104C33 107.9 29.9 111 26 111C22.1 111 19 107.9 19 104C19 100.1 22.1 97 26 97 z M 61 107C64.9 107 68 110.1 68 114C68 117.9 64.9 121 61 121C57.1 121 54 117.9 54 114C54 110.1 57.1 107 61 107 z M 120.96289 118C120.20039 118 119.45039 118.30039 118.90039 118.90039C117.70039 120.10039 117.70039 121.99961 118.90039 123.09961L121.90039 126.09961C122.50039 126.69961 123.3 127 124 127C124.7 127 125.49961 126.69961 126.09961 126.09961C127.29961 124.89961 127.29961 123.00039 126.09961 121.90039L123.09961 118.90039C122.49961 118.30039 121.72539 118 120.96289 118 z"  />
</svg>
     <span hidden>Who We Are</span>

  </NavLink>









  <NavLink to='/ourservices' className="OurServices" title='Our Services'>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path d="M14 2L14 7L19 7L19 2L14 2 z M 14 9L14 14L19 14L19 9L14 9 z M 12 9.0253906C8.645 9.2813906 6 12.079 6 15.5C6 19.09 8.91 22 12.5 22C15.921 22 18.718609 19.355 18.974609 16L12 16L12 9.0253906 z"  />
</svg>

     <span hidden>Our Services</span>

  </NavLink>







  <NavLink to='/ourproject' className="OurProject" title='Our Project'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
  <path d="M4,20h2c1.105,0,2-0.895,2-2V6c0-1.105-0.895-2-2-2H4C2.895,4,2,4.895,2,6v12C2,19.105,2.895,20,4,20z"  />
  <path d="M13,12h-1c-1.105,0-2,0.895-2,2v4c0,1.105,0.895,2,2,2h1c1.105,0,2-0.895,2-2v-4 C15,12.895,14.105,12,13,12z" opacity=".35"  />
  <path d="M20,10h-8c-1.105,0-2-0.895-2-2V6c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2v2 C22,9.105,21.105,10,20,10z" opacity=".35"  />
  <path d="M20,20h-1c-1.105,0-2-0.895-2-2v-4c0-1.105,0.895-2,2-2h1c1.105,0,2,0.895,2,2v4C22,19.105,21.105,20,20,20z"  />
</svg>

     <span hidden>Our Project</span>

  </NavLink>






  <NavLink to='/oursupplies' className='OurSupplies' title='Our Supplies' >


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
  <path d="M10.5 1C9.601563 1 8.707031 1.34375 8.023438 2.023438L8.03125 2.015625L2.53125 7.265625L3.21875 7.984375L8.726563 2.734375L8.734375 2.734375C9.714844 1.75 11.285156 1.75 12.265625 2.734375C13.25 3.714844 13.246094 5.285156 12.265625 6.265625L5.566406 12.554688L5.5625 12.5625C4.96875 13.152344 4.03125 13.152344 3.4375 12.5625C2.851563 11.972656 2.851563 11.03125 3.4375 10.441406C3.4375 10.441406 3.4375 10.4375 3.4375 10.4375L10.140625 4.152344L10.144531 4.148438C10.34375 3.945313 10.652344 3.945313 10.855469 4.148438C11.054688 4.34375 11.054688 4.652344 10.855469 4.851563L5.035156 10.257813L5.714844 10.992188L11.554688 5.566406L11.5625 5.5625C12.140625 4.980469 12.144531 4.019531 11.5625 3.4375C10.980469 2.859375 10.019531 2.855469 9.4375 3.4375L2.738281 9.726563L2.734375 9.734375C1.761719 10.703125 1.761719 12.296875 2.734375 13.265625C3.703125 14.238281 5.296875 14.238281 6.265625 13.265625L12.96875 6.980469L12.972656 6.976563C14.335938 5.613281 14.335938 3.386719 12.972656 2.023438C12.292969 1.34375 11.398438 1 10.5 1Z"  />
</svg>

     <span hidden>Our Supplies</span>

  </NavLink>







  <NavLink to='/ourclients' className='OurClients' title='Our Clients' >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path d="M13 7C9.691 7 7 9.691 7 13C7 16.309 9.691 19 13 19C16.309 19 19 16.309 19 13C19 9.691 16.309 7 13 7 z M 35 7C34.793188 7 34.588197 7.0107327 34.386719 7.03125C31.364545 7.33901 29 9.8978125 29 13C29 14.447688 29.514539 15.776937 30.371094 16.814453C31.472379 18.148402 33.138687 19 35 19C38.309 19 41 16.309 41 13C41 9.691 38.309 7 35 7 z M 24 17C20.897812 17 18.33901 19.364545 18.03125 22.386719C18.010733 22.588197 18 22.793187 18 23C18 26.102188 20.364545 28.66099 23.386719 28.96875C23.588197 28.989267 23.793187 29 24 29C27.309 29 30 26.309 30 23C30 19.691 27.309 17 24 17 z M 24 20C25.654 20 27 21.346 27 23C27 24.654 25.654 26 24 26C22.346 26 21 24.654 21 23C21 22.79325 21.020512 22.591582 21.060547 22.396484C21.340793 21.030801 22.55275 20 24 20 z M 7.5 21C5.57 21 4 22.57 4 24.5L4 27C4 30.364 7.953 33 13 33C13.073 33 13.142844 32.993188 13.214844 32.992188C13.872844 30.691187 15.991 29 18.5 29L18.720703 29C17.055703 27.534 16 25.393 16 23C16 22.308 16.096719 21.64 16.261719 21L7.5 21 z M 31.738281 21C31.903281 21.64 32 22.308 32 23C32 25.393 30.944297 27.534 29.279297 29L29.5 29C32.009 29 34.127156 30.691187 34.785156 32.992188C34.857156 32.993187 34.927 33 35 33C40.047 33 44 30.364 44 27L44 24.5C44 22.57 42.43 21 40.5 21L31.738281 21 z M 18.5 31C16.57 31 15 32.57 15 34.5L15 37C15 40.364 18.953 43 24 43C29.047 43 33 40.364 33 37L33 34.5C33 32.57 31.43 31 29.5 31L18.5 31 z M 18.5 34L29.5 34C29.775 34 30 34.225 30 34.5L30 37C30 38.416 27.434 40 24 40C20.566 40 18 38.416 18 37L18 34.5C18 34.43125 18.013672 34.366406 18.039062 34.306641C18.115234 34.127344 18.29375 34 18.5 34 z"  />
</svg>

     <span hidden>Our Clients</span>

  </NavLink>







  <NavLink to='/whyus' className='WhyUs' title='Why Us'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
  <path d="M19.09375 2C18.441406 2 16.15625 2.226563 16.15625 5L18.25 5C18.25 4.085938 18.746094 3.75 19.09375 3.75C19.625 3.75 19.90625 4.175781 19.90625 5C19.90625 6.726563 17.914063 6.5625 18.03125 9.59375L19.875 9.59375C19.769531 7.261719 22 7.359375 22 4.90625C22 4.253906 21.894531 2 19.09375 2 Z M 10 6C7.789063 6 6 7.789063 6 10C6 12.210938 7.789063 14 10 14C12.210938 14 14 12.210938 14 10C14 7.789063 12.210938 6 10 6 Z M 19 10.71875C18.046875 10.71875 17.84375 11.535156 17.84375 11.875C17.84375 12.214844 18.003906 13 19 13C19.996094 13 20.125 12.191406 20.125 11.875C20.125 11.558594 19.953125 10.71875 19 10.71875 Z M 10 16C3.921875 16 2 20 2 20L2 22L18 22L18 20C18 20 16.078125 16 10 16Z" />
</svg>

     <span hidden>Why Us</span>

  </NavLink>







    <NavLink to='/contactus' className='ContactUs' title='Contact Us'>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
  <path d="M19 0L8 0C6.34375 0 5 1.34375 5 3L5 23C5 24.65625 6.34375 26 8 26L19 26C20.65625 26 22 24.65625 22 23L22 3C22 1.34375 20.65625 0 19 0 Z M 12.5 1L14.5 1C14.777344 1 15 1.222656 15 1.5C15 1.777344 14.777344 2 14.5 2L12.5 2C12.222656 2 12 1.777344 12 1.5C12 1.222656 12.222656 1 12.5 1 Z M 13.5 24.777344C12.792969 24.777344 12.222656 24.207031 12.222656 23.5C12.222656 22.792969 12.792969 22.222656 13.5 22.222656C14.207031 22.222656 14.777344 22.792969 14.777344 23.5C14.777344 24.207031 14.207031 24.777344 13.5 24.777344 Z M 20 20.5C20 20.777344 19.777344 21 19.5 21L7.5 21C7.222656 21 7 20.777344 7 20.5L7 3.5C7 3.222656 7.222656 3 7.5 3L19.5 3C19.777344 3 20 3.222656 20 3.5Z"  />
</svg>
     <span hidden>Contact Us</span>
  </NavLink>



<hr hidden />



   <NavLink to='/tssre' className='googleForm'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
  <path d="M8.5 8C6.0324991 8 4 10.032499 4 12.5L4 35.5C4 37.967501 6.0324991 40 8.5 40L39.5 40C41.967501 40 44 37.967501 44 35.5L44 12.5C44 10.032499 41.967501 8 39.5 8L8.5 8 z M 8.5 11L39.5 11C40.346499 11 41 11.653501 41 12.5L41 35.5C41 36.346499 40.346499 37 39.5 37L8.5 37C7.6535009 37 7 36.346499 7 35.5L7 12.5C7 11.653501 7.6535009 11 8.5 11 z M 16 17 A 3 3 0 0 0 16 23 A 3 3 0 0 0 16 17 z M 26.5 19 A 1.50015 1.50015 0 1 0 26.5 22L35.5 22 A 1.50015 1.50015 0 1 0 35.5 19L26.5 19 z M 12.5 25C11.672 25 11 25.672 11 26.5C11 28 11.000391 31 15.900391 31L16.099609 31C20.999609 31 21 28 21 26.5C21 25.672 20.328 25 19.5 25L12.5 25 z M 26.5 26 A 1.50015 1.50015 0 1 0 26.5 29L35.5 29 A 1.50015 1.50015 0 1 0 35.5 26L26.5 26 z"  />
</svg>
<span hidden>Email</span>
  </NavLink>
</div>
 
</div>
 
 <div className="col">

                  <div className="col-12">
                    {children}</div>

              </div>
  </div>
</div>
  
  
  )}

export default Sidebar