import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import "../Style/loginbox.css"
import {useNavigate} from "react-router-dom"
const LoginBox = () => {
    const Navigat=useNavigate();
    const dispatch = useDispatch();
    const [Name,SetName]=useState("")
    const [Phone,SetPhone]=useState("")
    const [Email,SetEmail]=useState("")
    const Login=()=>{
        let handler={
            name:Name,
            phone:Phone,
            email:Email,
        }
       dispatch({
        type: "Login",
        payload:handler
       })
       Navigat("/")
    }
  return (
    <>
    <div className="loginbox">
        <input type="text" onChange={(e)=>{
            SetName(e.target.value)
        }} placeholder='Enter Your Name' />
        <input type="Email" onChange={(e)=>{
            SetEmail(e.target.value)
        }} placeholder='Enter Your Email'/>
        <input type="Number" onChange={(e)=>{
            SetPhone(e.target.value)
        }} placeholder='Enter Your Phone no.'/>
        <button onClick={Login}>Login</button>
    </div>
    </>
  )
}

export default LoginBox
