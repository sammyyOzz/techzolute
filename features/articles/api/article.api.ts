import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Article } from '../types/article.types'

interface GetArticlesReturn {
    count: number;
    articles: Array<Article>;
}

interface GetArticlesQuery {
    page: number;
    limit: number;
    category: string;
}

const baseUrl = process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000/api/article'
    : 'https://tech-zolute.herokuapp.com/api/article/'

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getArticles: builder.query<GetArticlesReturn, GetArticlesQuery>({
            query({ page, limit, category }: GetArticlesQuery) {
                return `/?page=${page}&limit=${limit}&category=${category}`
            },
        }),
        getOneArticle: builder.query<Article, string>({
            query: (id: string) => `/${id}` ,
        }),
    }),
})

export const {
    useGetArticlesQuery,
    useGetOneArticleQuery
} = articleApi