import React from "react";

const ToDoItem = (props) => {
  return (
    <div >
      <button className="btnclose" >
        <span onClick={()=>{
           return props.deleteFunc(props.id);
        }} className="material-symbols-outlined">close</span>
      </button>
      <li>{props.item}</li>
    </div>
  );
};

export default ToDoItem;
