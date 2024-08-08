import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeModalHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
