import { Root } from "./view-article.styles";
import htmlParser from "html-react-parser";
import { useRouter } from "next/router";
import { useGetOneArticleQuery } from "@features/articles/api/article.api";

export function ViewArticle() {
  const { query } = useRouter();
  const articleId = (query?.articleId as string) || "";

  const { data, error, isLoading } = useGetOneArticleQuery(articleId);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error {JSON.stringify(error)}</>;
  }

  return (
    <Root>
      <h1>{data?.title}</h1>
      {htmlParser(data?.content || "")}
    </Root>
  );
}
