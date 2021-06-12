import {useState} from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop"; 

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //react hook, use state return an array; always two element return
 
  function deleteHandler() {
    setModalIsOpen(true);  //sets the modalIsopen to true
  }

  function closeModalHandler(){
      setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>A span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
