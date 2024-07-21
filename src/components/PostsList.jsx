import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ modalIsVisible, onClose }) {
  let modalContent;

  if (modalIsVisible) {
    modalContent = (
      <Modal onClose={onClose}>
        <NewPost onCancel={onClose} />
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
