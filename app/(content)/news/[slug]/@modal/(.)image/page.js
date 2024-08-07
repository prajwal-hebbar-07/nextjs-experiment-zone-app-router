import { notFound } from "next/navigation";

import ModalBackdrop from "@/app/_components/modal-backdrop";

import { getNewsItem } from "@/app/_lib/news";

export default async function InterceptedFullScreenImage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
