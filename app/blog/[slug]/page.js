export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Individual Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
