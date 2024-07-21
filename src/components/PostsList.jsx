import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ modalIsVisible, onClose }) {
  const [posts, setPosts] = useState([]);
  let modalContent;

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={onClose}>
        <NewPost onCancel={onClose} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post name="Subramanya Prabhu U S" info="Reusable Component" />
      </ul>
    </>
  );
}
export default PostsList;
