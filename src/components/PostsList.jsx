import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      (
      <>
        {posts.length > 0 ? (
          <ul className={classes.posts}>
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                name={post.name}
                info={post.info}
              />
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
