import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavBar } from './components/Navbar';


import React, {useEffect} from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Admin } from './components/Admin';
import { User } from './components/User';
import { Auth } from './components/Auth';
import Aboutus from './components/Aboutus';
import Contacutus from './components/Contacutus';
import Services from './components/Services';
function App() {
  
  return (
   
      <div className="App">
      <Auth>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/contactus' element={<Contacutus/>}/>
            <Route path='/services' element={<Services/>}/>     
          </Routes>
          </Auth>
      </div>
  );
}

export default App;
