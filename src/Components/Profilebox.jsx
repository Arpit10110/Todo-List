import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
const Profilebox = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const {UserData}=useSelector((state)=>state.Local)
    const Logout=()=>{
        dispatch({
            type:"logout"
        })
        Navigate("/")
    }
  return (
   <>
   <div className="loginbox">
        <h1>Name:-{UserData[0].name}</h1>
        <h1>Email-{UserData[0].email}</h1>
        <h1>Phone:-{UserData[0].phone}</h1>
        <button onClick={Logout} >LogOut</button>
   </div>
   </>
  )
}

export default Profilebox
