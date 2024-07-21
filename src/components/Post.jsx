const names = ["Prajwal Hebbar A S", "Subramanya Prabhu U S"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h1>{chosenName}</h1>
      <p>First React Component</p>
    </div>
  );
}
export default Post;
