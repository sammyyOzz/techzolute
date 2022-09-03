import { NextPage } from "next";
import { ArticleResultsList } from "@features/articles/components/article-results-list/article-results-list.component";
import { ArticleNewsList } from "@features/articles/components/article-news-list/article-news-list.component";
import { useRouter } from "next/router";
import { Container, Row, Col } from 'react-awesome-styled-grid'


const Category: NextPage = () => {
    const router = useRouter()
    const category = router.query?.category as string || ''
   
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <ArticleResultsList category={category} />
                    </Col>
                    <Col xs={12} md={4}>
                        <ArticleNewsList />
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default Category