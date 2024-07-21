import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="info">Info</label>
        <textarea id="info" rows={3} onChange={props.onInfoChange} required />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={props.onNameChange} required />
      </p>
    </form>
  );
}
export default NewPost;
