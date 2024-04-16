import { createAction,createReducer } from "@reduxjs/toolkit";
const Local=createAction('Local')
const Mark=createAction('Mark')
const Delete=createAction('Delete')
const change=createAction('change')
const update=createAction('update')
const Login=createAction('Login')
const logout=createAction('logout')
export const LocalData=createReducer({ 
   task:localStorage.getItem("todotask")?JSON.parse(localStorage.getItem("todotask") ): [],
   UserData:localStorage.getItem("todoUser")?JSON.parse(localStorage.getItem("todoUser") ): [],
   login:localStorage.getItem("todoLogin")?localStorage.getItem("todoLogin"): "false",
},
(builder)=>{
    builder.addCase(Local,(state,action)=>{
      let data=action.payload;
      state.task.push(data);
      localStorage.setItem("todotask",JSON.stringify(state.task));
    })
    builder.addCase(Mark,(state,action)=>{
      let data=action.payload;
      state.task.map((i)=>{
        if(i.id == data.id){
          i.marked=data.marked;
        }
      })
      localStorage.setItem("todotask",JSON.stringify(state.task));
    })
    builder.addCase(change,(state,action)=>{
      let data=action.payload;
      state.task.map((i)=>{
        if(i.id == data.id){
          i.change=data.change;
        }
      })
    })
    builder.addCase(update,(state,action)=>{
      let data=action.payload;
      state.task.map((i)=>{
        if(i.id == data.id){
          i.task=data.task;
          i.change=data.change;
        }
      })
      localStorage.setItem("todotask",JSON.stringify(state.task));
    })
    builder.addCase(Delete,(state,action)=>{
      let data=action.payload;
      state.task=state.task.filter((i)=>data.id !== i.id)
    localStorage.setItem("todotask", JSON.stringify(state.task))
  })
  builder.addCase(Login,(state,action)=>{
    let data=action.payload;
    state.UserData.push(data)
    state.login="true"
    localStorage.setItem("todoUser", JSON.stringify(state.UserData))
    localStorage.setItem("todoLogin",state.login)
    })
    builder.addCase(logout,(state,action)=>{
      state.login="false"
      state.UserData=[];
      localStorage.setItem("todoUser", JSON.stringify(state.UserData))
      localStorage.setItem("todoLogin",state.login)
    })
}) 