function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      {/* We could have said onClick={props.onConfirm} rather we decided to pass in a function */}
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
      {/* We could have said onClick={props.onConfirm} */}
    </div>
  );
}
export default Modal;
