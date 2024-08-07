import NewsList from "@/app/_components/news-list";
import { getAllNews } from "@/app/_lib/news";

export default async function News() {
  const news = getAllNews();

  return (
    <>
      <h2>News Page</h2>
      <NewsList news={news} />
    </>
  );
}
