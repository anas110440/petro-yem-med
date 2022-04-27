import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home } from './Component/index';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {

  return (
<div className="App">
<BrowserRouter>

<Routes>

<Route path='/petro-yem-med' element={<Home  />} />
<Route path='/' element={<Home  />} />


<Route path='/landing-page' element={<Sidebar />} />

</Routes>

</BrowserRouter>

        
        </div>
  );
}

export default App;
