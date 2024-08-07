"use client";

import { useEffect, useState } from "react";

import NewsList from "@/app/_components/news-list";

export default function News() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [news, setNews] = useState();

  let newsContent;

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch the news!");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h2>News Page</h2>
      {newsContent}
    </>
  );
}
