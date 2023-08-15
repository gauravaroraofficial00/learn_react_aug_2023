
const Modal=(props)=>{


    return (
        <div className="modal">
            <button className="btn--alt" >Ok</button>
            <button  className="btn--alt" onClick={props.closeModal}>Cancel</button>
        </div>
    )
}


export default Modal;