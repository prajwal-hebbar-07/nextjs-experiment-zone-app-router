import Link from "next/link";

import NewsList from "@/app/_components/news-list";

import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/_lib/news";

export default function FilteredNewsPage({ params }) {
  const { filter } = params;
  let links = getAvailableNewsYears();
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let newsContent = <p>No year selected yet!</p>;

  if (selectedYear && selectedYear.length > 0) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
