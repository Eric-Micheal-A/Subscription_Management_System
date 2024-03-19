import React, { useState,useEffect } from 'react'
import { useAuth } from './Auth'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

export const Login = () => {

  const [userlist, setUserList] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(res=>setUserList(res.data))
    .catch(err=>console.log(err))
},[])

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const context = useAuth()

    
    const handleLogin = (e) =>{
      const isUserValid = userlist.some(u =>
        u.name === user && u.pass === pass
      ) // 1 == '1' 1 === '1'
      if(isUserValid){
        context.login(user)
        console.log("Valid")
        context.changeStatus()
        navigate('/')
      }else{
        alert("Incorrect Username or Password")
      }
    }

    return (
      <div className="login-parent" data-aos="fade-down" >
        <h1>Login</h1>
        <div data-aos="flip-left">
            <form className="login-form">
              <label>Username:</label>
                <input type="text"  value={user} onChange={(e)=>{setUser(e.target.value)}} id="user" />
                <label>Password:</label>
                <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} id="password" />
                <button type="submit" id="login-btn"  onClick={handleLogin}>Login</button>
                <p className="login-message login-register">
                  <span className ="regmes" >Not registered? </span>
                  <span><NavLink className ="regli" to="/register">Create new account</NavLink></span>
                </p>
            </form>
        </div>
    </div>
  )
}
