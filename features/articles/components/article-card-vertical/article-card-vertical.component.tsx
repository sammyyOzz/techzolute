import Link from "next/link";
import { Body, Image, Root } from "./article-card-vertical.styles";

interface ArticleCardVerticalProps {
  _id: string;
  title: string;
  category: string;
  imagePreview?: string;
}

export function ArticleCardVertical({
  _id,
  title,
  category,
  imagePreview,
}: ArticleCardVerticalProps) {
  return (
    <Link href={`/${category}/${_id}`}>
      <Root>
        <Image
          src={
            imagePreview ||
            "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          alt=""
          loading="lazy"
        />
        <Body>
          <div className="title">{title}</div>
          <div className="date-and-author">02 June 2022 - by Victoria Rawson</div>
        </Body>
      </Root>
    </Link>
  );
}
