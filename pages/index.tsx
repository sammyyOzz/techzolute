import Head from 'next/head'
import type { NextPage } from 'next'
import { ArticleListByCategory } from '@features/articles/components/article-list-by-category/article-list-by-category.component'
import { ArticleNewsList } from '@features/articles/components/article-news-list/article-news-list.component'
import { Container, Row, Col } from 'react-awesome-styled-grid'

const Home: NextPage = () => {

  return (
    <>
      <Container>
        <Row>
            <Col xs={12} md={8}>
              <ArticleListByCategory />
            </Col>
            <Col xs={12} md={4}>
                <ArticleNewsList />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
