import NewsList from "@/app/_components/news-list";
import { getNewsForYear } from "@/app/_lib/news";

export default function FilteredNewsPage({ params }) {
  const { year } = params;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
