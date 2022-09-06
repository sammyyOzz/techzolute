import { NextPage } from "next";
import { ViewArticle } from "@features/articles/components/view-article/view-article.component";
import { Container, Row, Col } from "react-awesome-styled-grid";
import { ArticleNewsList } from "@features/articles/components/article-news-list/article-news-list.component";

const Article: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={8} md={9}>
          <ViewArticle />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <ArticleNewsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
