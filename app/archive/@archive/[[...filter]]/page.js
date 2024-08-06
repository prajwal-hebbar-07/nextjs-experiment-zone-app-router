import Link from "next/link";

import { getAvailableNewsYears, getNewsForYear } from "@/app/_lib/news";

export default function FilteredNewsPage({ params }) {
  const { filter } = params;
  console.log(filter);

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
