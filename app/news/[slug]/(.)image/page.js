import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy_news";

export default function InterceptedFullScreenImage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <h1>Intercepted!</h1>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
