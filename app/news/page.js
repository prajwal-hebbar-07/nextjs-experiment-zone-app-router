import { DUMMY_NEWS } from "@/dummy_news";
import Link from "next/link";

export default function News() {
  return (
    <>
      <h2>News Page</h2>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <p>{newsItem.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
