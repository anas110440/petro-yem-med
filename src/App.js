import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {ContactUs  ,Home ,HowWeAre  ,OurClients,OurProject,OurServices, OurSupplies, WhyUs} from './Component/index';

function App() {
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
<div className="App">
<BrowserRouter>
<Routes>

<Route path='/' element={<Home hide={hide} />} />
<Route path='/petro-yem-med' element={<Home hide={hide} />} />


<Route path='/home' element={<Home hide={hide} />} />
<Route path='/how-we-are' element={<HowWeAre hide={hide} />} />
<Route path='/ourservices' element={<OurServices hide={hide} />} />
<Route path='/ourproject' element={<OurProject hide={hide} />} />
<Route path='/oursupplies' element={<OurSupplies hide={hide} />} />
<Route path='/ourclients' element={<OurClients hide={hide} />} />
<Route path='/whyus' element={<WhyUs hide={hide} />} />
<Route path='/contactus' element={<ContactUs hide={hide} />} />
</Routes>

</BrowserRouter>

        
        </div>
  );
}

export default App;
