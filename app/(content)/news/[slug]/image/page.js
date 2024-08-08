import { notFound } from "next/navigation";

import { getNewsItem } from "@/app/_lib/news";

export default async function FullScreenImage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
