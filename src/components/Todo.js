import Backdrop from "./Backdrop";
import Modal from "./Modal";
import React from "react";

const Todo = (props) => {


const [openModalState,setOpenModalState] = React.useState(false);

const openModal=()=>{
    setOpenModalState(true);
}

const closeModal=()=>{
  setOpenModalState(false);
}




  return (
    <div className="card" >
      <h2>{props.text}</h2>
      <div  >
        <button
          style={{ right: "0px", backgroundColor: "red", color: "white" }}
          onClick={openModal}
        >
          Delete
        </button>
        {openModalState &&
          <><Modal closeModal={closeModal} /> <Backdrop closeModal={closeModal} /></>}
      </div>
    </div>
  );
};

export default Todo;
