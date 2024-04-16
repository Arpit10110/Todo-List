import React from "react";
import { useState } from "react";
import "../Style/todobox.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todolists from "./Todolists";
import { useSelector, useDispatch } from "react-redux";
const Todobox = () => {
  const dispatch = useDispatch();
  const [Inputtask, SetInputtask] = useState();
  const { task } = useSelector((state) => state.Local);
  const sendtoRedux = () => {
    dispatch({
      type: "Local",
      payload: {
        id: task.length,
        task: Inputtask,
        marked:"mark",
        change:false,
      },
    });
   SetInputtask("")
  };
  const enter = (e) => {
    if (e == "Enter") {
      toast.success('Task Added!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      sendtoRedux();
    }
  };
  return (
    <>
      <div className="todobox">
        <input
          type="text"
          value={Inputtask}
          placeholder="Enter the task!!!"
          onKeyUp={(e) => enter(e.key)}
          onChange={(e) => {
            SetInputtask(e.target.value);
          }}
        />
        <div className="todolist">
          {task.map((i, index) => {
            return <Todolists key={index} change={i.change} count={index} id={i.id} task={i.task} marked={i.marked} />;
          })}
      </div>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </div>
    </>
  );
};

export default Todobox;
