import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/nav.css'
import { useAuth } from './Auth';

export const NavBar = () => {
    const context = useAuth()
  return (
    <div className='full4'>
    <div className="nav-container" data-aos="fade-down" >
            <ul className = "navbar">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    <li className="list item5"><NavLink className="items" to="/aboutus">About</NavLink></li>      
                    <li className="list item6"><NavLink className="items" to="/contactus">Contact</NavLink></li>
                    {context.user==='admin'&&
                    <li className="list item2"><NavLink className="items" to="/admin" >Admin</NavLink></li>}
                    <li className="list item3"><NavLink className="items" to="/user" >User</NavLink></li>
                    <li className="list item4"><NavLink className = "items" to="/login" >Login</NavLink></li>       
                         
            </ul>
            </div>
        </div>
  )
}
