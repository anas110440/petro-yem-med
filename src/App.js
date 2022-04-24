import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {ContactUs  ,Footer,Home ,HowWeAre  ,OurClients,OurProject,OurServices, OurSupplies, WhyUs} from './Component/index';
import Logo from './Component/Logo/Logo';

function App() {
  return (
<div className="App">
<BrowserRouter>
<Routes>

<Route path='/' element={<Home />} />


<Route path='/home' element={<Home />} />
<Route path='/how-we-are' element={<HowWeAre />} />
<Route path='/ourservices' element={<OurServices />} />
<Route path='/ourproject' element={<OurProject />} />
<Route path='/oursupplies' element={<OurSupplies />} />
<Route path='/ourclients' element={<OurClients />} />
<Route path='/whyus' element={<WhyUs />} />
<Route path='/contactus' element={<ContactUs />} />
</Routes>

<Footer />
</BrowserRouter>

        
        </div>
  );
}

export default App;
