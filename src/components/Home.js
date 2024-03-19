import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/home.css'
import Aboutus from './Aboutus'
import Contacutus from './Contacutus'
import '../styles/about.css'

export const Home = () => {
  return (
    <div className='full3'>
      <center>
        <h1>Subscription Management System</h1>
      </center>
        <Aboutus/>
        <Contacutus/>
        </div>
  )
}
