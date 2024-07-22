import { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ modalIsVisible, onClose }) {
  const [posts, setPosts] = useState([]);
  let modalContent;

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      console.log(data.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} name={post.name} info={post.info} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Try to add some posts</p>
        </div>
      )}
    </>
  );
}
export default PostsList;
