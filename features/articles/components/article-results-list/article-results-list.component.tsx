import { useGetArticlesQuery, usePrefetch } from "@features/articles/api/article.api";
import { Paginate } from "@features/pagination/components/paginate/paginate.component";
import { usePaginate } from "@features/pagination/hooks/use-paginate.hook";
import { ArticleCardHorizontal } from "../article-card-horizontal/article-card-horizontal.component";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";

interface ArticleResultsListProps {
    category?: string;
    search?: string;
}

const limit = 1

export function ArticleResultsList({ category = '', search }: ArticleResultsListProps) { 
    const [page, handlePageChange] = usePaginate()
    const prefetchPage = usePrefetch('getArticles')

    const query = useMemo(() => ({
        page, 
        limit,
        category,
        search
    }), [page, category, search])

    const { data, error, isLoading, isFetching } = useGetArticlesQuery(query);

    const prefetchNextPage = useCallback(() => {
        if (data?.meta.hasNextPage) {
            prefetchPage({ ...query, page: page + 1 })
        }
    }, [data?.meta.hasNextPage, query, page, prefetchPage])

    useEffect(() => {
        prefetchNextPage()
    }, [prefetchNextPage])

    if (isLoading) {
        return <>
            Loading...
        </>
    }

    if (error) {
        return <>
            Error { error }
        </>
    }

    return (
        <>
            { (data?.items || []).map((article) => (
                <ArticleCardHorizontal
                    key={article._id}
                    { ...article }
                    large
                />
            ))}

            { isFetching && 'fetching...' }

            <Paginate
                pageCount={data?.meta.totalPages || 0}
                handlePageChange={handlePageChange} 
            />
        </>
    )
}