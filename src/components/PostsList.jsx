import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

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

  return (
    <>
      (
      <>
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
      )
    </>
  );
}
export default PostsList;
