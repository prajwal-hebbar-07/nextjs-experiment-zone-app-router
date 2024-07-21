import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ modalIsVisible, onClose }) {
  const [enteredInfo, setEnteredInfo] = useState("Test Component");
  const [enteredName, setEnteredName] = useState("Prajwal Hebbar A S");
  let modalContent;

  function infoChangeHandler(event) {
    setEnteredInfo(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={onClose}>
        <NewPost
          onInfoChange={infoChangeHandler}
          onNameChange={nameChangeHandler}
          onCancel={onClose}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post name={enteredName} info={enteredInfo} />
        <Post name="Subramanya Prabhu U S" info="Reusable Component" />
      </ul>
    </>
  );
}
export default PostsList;
