
//& For a reference to this page I followed the pages from the 'crytoprices' in the same parent folder of Mod2 

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Stocks from './Pages/Stocks';
import About from './Pages/About';
import Main from './Pages/Main';
import './index.css';


function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/stocks:symbol' element={ <Stocks /> } />
        <Route path='*' element={ <Navigate to='/'/> } />
      </Routes>
    </div>
  );
}

export default App;
