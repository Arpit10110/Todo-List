import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
const Todolists = ({ id, task, marked, count, change }) => {
  const dispatch = useDispatch();
  const [UpdateIn,SetUpdateIn]=useState("");
  const Markhandler = (handlerVal) => {
    if (marked === "mark") {
      handlerVal.marked = "unmark";
      dispatch({
        type: "Mark",
        payload: handlerVal,
      });
      toast.info('Task Marked!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      handlerVal.marked = "mark";
      dispatch({
        type: "Mark",
        payload: handlerVal,
      });
      toast.info('Task UnMarked!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  const Pencil = () => {
    let handlerVal={
      id:id
    }
    if (change === false) {
      handlerVal.change = true;
      dispatch({
        type: "change",
        payload: handlerVal,
      });
    } else {
      handlerVal.change = false;
      dispatch({
        type: "change",
        payload: handlerVal,
      });
    }
  };
  const DeleteHandler = (handlerVal) => {
    toast.error('Task Deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    dispatch({
      type: "Delete",
      payload: handlerVal,
    });
  };
  const update=()=>{
    let handlerVal={
      id:id,
      task:UpdateIn,
      change:false
    }
    dispatch({
      type: "update",
      payload: handlerVal,
    })
    toast.success('Task Updated!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    Pencil();
  }
  const enter = (e) => {
    if (e == "Enter") {
      update();
    }
  };
  return (
    <>
    <div className="Etask">
      <div className="Otask">
        <h4>
          {count + 1}.
          {marked === "unmark" ? (
            <h3>
              <div>
                {change === true ? <input type="text"  onKeyUp={(e) => enter(e.key)} onChange={(e)=>{SetUpdateIn(e.target.value)}} /> : <del>{task}</del>}
              </div>
            </h3>
          ) : (
            <h3><div>
            {change === true ? <input type="text"  onKeyUp={(e) => enter(e.key)} onChange={(e)=>{SetUpdateIn(e.target.value)}} /> : <span>{task}</span>}
          </div></h3>
          )}
        </h4>
        <ModeEditIcon
          className="pencil"
          onClick={() => Pencil()}
        />
      </div>
      <div className="TaskBtn">
        <button
          onClick={() =>
            Markhandler({ id: id, task: task, marked: marked, change: change })
          }
        >
          {marked}
        </button>
        <button onClick={() => DeleteHandler({ id: id })}>Delete</button>
      </div>
    </div>
    </>
  );
};

export default Todolists;
