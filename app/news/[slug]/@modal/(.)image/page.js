import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy_news";

export default function InterceptedFullScreenImage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="modal-backdrop">
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </div>
  );
}
