import Link from "next/link";
import { Fragment } from "react";
import { Title, VerticalCardsContainer } from "./article-list-by-category.styles";
import { groupByCategory } from "@features/articles/helpers/article.helpers";
import { ArticleCardVertical } from "../article-card-vertical/article-card-vertical.component";
import { useGetArticlesQuery } from "@features/articles/api/article.api";


export function ArticleListByCategory() {
    const { data, error, isLoading } = useGetArticlesQuery({ page: 1, limit: 20, category: '' });

    const articlesByCategory = groupByCategory(data?.items || []);

    if (isLoading) {
        return (
            <>Loading...</>
        )
    }

    if (error) {
        return (
            <>Error:  + {error}</>
        )
    }

    return (
        <>
            { articlesByCategory.map(group => (
                <Fragment key={group.category}>
                    
                    <Title>
                        <Link href={`/${group.category}`} passHref>
                            <span>{ group.category } </span>
                        </Link>
                    </Title>

                    <VerticalCardsContainer>
                        { group.items.map(({ _id, title, category, imagePreview }) => (
                            <ArticleCardVertical 
                                key={_id} 
                                _id={_id}
                                title={title}
                                category={category}
                                imagePreview={imagePreview}
                            />
                        ))}
                    </VerticalCardsContainer>
                </Fragment>
            ))}
        </>
    )
}