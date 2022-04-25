import React from 'react'
import './style.css'
const Footer = () => {
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
    <footer onMouseEnter={()=>hide()}>
Copyright &copy; 2022 PETRO-YEM-MED - Designed &amp; Developed by <span> NERDO </span> for IT Multimedia Services
<span className='icon'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <path d="M15 3C8.373 3 3 8.373 3 15C3 17.251208 3.6323415 19.350068 4.7109375 21.150391L3.1074219 27L9.0820312 25.431641C10.829354 26.425062 12.84649 27 15 27C21.627 27 27 21.627 27 15C27 8.373 21.627 3 15 3 z M 10.892578 9.4023438C11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562C11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281C12.395859 10.509828 12.972875 11.979906 13.046875 12.128906C13.120875 12.277906 13.173313 12.453437 13.070312 12.648438C12.972312 12.848437 12.921344 12.969484 12.777344 13.146484C12.628344 13.318484 12.465078 13.532109 12.330078 13.662109C12.181078 13.811109 12.027219 13.974484 12.199219 14.271484C12.371219 14.568484 12.968563 15.542125 13.851562 16.328125C14.986562 17.342125 15.944188 17.653734 16.242188 17.802734C16.540187 17.951734 16.712766 17.928516 16.884766 17.728516C17.061766 17.533516 17.628125 16.864406 17.828125 16.566406C18.023125 16.268406 18.222188 16.319969 18.492188 16.417969C18.766188 16.515969 20.227391 17.235766 20.525391 17.384766C20.823391 17.533766 21.01875 17.607516 21.09375 17.728516C21.17075 17.853516 21.170828 18.448578 20.923828 19.142578C20.676828 19.835578 19.463922 20.505734 18.919922 20.552734C18.370922 20.603734 17.858562 20.7995 15.351562 19.8125C12.327563 18.6215 10.420484 15.524219 10.271484 15.324219C10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906C9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375C10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"  />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.464,12.535 c0.006,0.133,0.009,0.265,0.009,0.397c0,4.068-3.095,8.756-8.756,8.756c-1.739,0-3.356-0.509-4.717-1.383 c0.241,0.029,0.486,0.042,0.735,0.042c1.443,0,2.769-0.491,3.821-1.318c-1.347-0.025-2.484-0.915-2.875-2.137 c0.188,0.036,0.381,0.055,0.579,0.055c0.281,0,0.554-0.038,0.811-0.108c-1.408-0.282-2.469-1.526-2.469-3.017 c0-0.013,0-0.026,0-0.039c0.415,0.231,0.889,0.369,1.394,0.385c-0.825-0.551-1.369-1.494-1.369-2.561 c0-0.565,0.151-1.094,0.416-1.547c1.518,1.862,3.786,3.088,6.343,3.216c-0.052-0.225-0.079-0.46-0.079-0.701 c0-1.699,1.378-3.078,3.077-3.078c0.885,0,1.685,0.374,2.246,0.972c0.701-0.139,1.36-0.394,1.955-0.747 c-0.23,0.719-0.718,1.321-1.354,1.703c0.622-0.074,1.215-0.239,1.768-0.484C22.588,11.559,22.067,12.1,21.464,12.535z" />
</svg>
</span>
    </footer>
    
  )
}

export default Footer