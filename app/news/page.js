import { DUMMY_NEWS } from "@/dummy_news";
import NewsList from "../_components/news-list";

export default function News() {
  return (
    <>
      <h2>News Page</h2>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
