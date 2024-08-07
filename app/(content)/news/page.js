import NewsList from "@/app/_components/news-list";

export default async function News() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news!");
  }

  const news = await response.json();

  return (
    <>
      <h2>News Page</h2>
      <NewsList news={news} />
    </>
  );
}
