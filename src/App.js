import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {ContactUs  ,Home ,HowWeAre  ,OurClients,OurProject,OurServices, OurSupplies, WhyUs} from './Component/index';

function App() {
  return (
<div className="App">
<BrowserRouter>
<Routes>

<Route path='/' element={<Home />} />
<Route path='/petro-yem-med' element={<Home />} />


<Route path='/home' element={<Home />} />
<Route path='/how-we-are' element={<HowWeAre />} />
<Route path='/ourservices' element={<OurServices />} />
<Route path='/ourproject' element={<OurProject />} />
<Route path='/oursupplies' element={<OurSupplies />} />
<Route path='/ourclients' element={<OurClients />} />
<Route path='/whyus' element={<WhyUs />} />
<Route path='/contactus' element={<ContactUs />} />
</Routes>

</BrowserRouter>

        
        </div>
  );
}

export default App;
