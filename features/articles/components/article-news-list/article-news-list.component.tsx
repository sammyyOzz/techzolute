import { ArticleCardHorizontal } from "../article-card-horizontal/article-card-horizontal.component";

export function ArticleNewsList() {
  return (
    <>
      <h2>Latest News</h2>

      {Array(5)
        .fill(null)
        .map((_, i) => (
          <ArticleCardHorizontal
            key={i}
            _id={`${Math.random()}`}
            category="one"
            title="Ultra music festival"
          />
        ))}

      <h2>Browse laptops</h2>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <ArticleCardHorizontal
            key={i}
            _id={`${Math.random()}`}
            category="one"
            title="Ultra music festival"
          />
        ))}
    </>
  );
}
