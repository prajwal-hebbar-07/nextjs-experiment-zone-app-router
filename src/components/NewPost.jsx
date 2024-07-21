import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="info">Info</label>
        <textarea id="info" rows={3} required />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}
export default NewPost;
