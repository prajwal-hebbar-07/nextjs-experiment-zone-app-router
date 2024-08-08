import NewsList from "@/app/_components/news-list";
import { DUMMY_NEWS } from "@/dummy_news";

export default function News() {
  return (
    <>
      <h2>News Page</h2>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
