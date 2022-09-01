import { useGetArticlesQuery } from '@features/articles/api/article.api'
import { ArticleCardHorizontal } from '@features/articles/components/article-card-horizontal/article-card-horizontal.component'
import { ArticleListByCategory } from '@features/articles/components/article-list-by-category/article-list-by-category.component'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetArticlesQuery({ page: 1, limit: 20, category: '' });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ width: 'calc(70% - 30px)' }}>
        { isLoading
          ? 'Loading...'
          : <ArticleListByCategory articles={data?.articles || []} /> 
        }
        </div>

        <div style={{ width: '30%' }}>
          <h2>Latest News</h2>

          { Array(5).fill(null).map((_, i) => (
            <ArticleCardHorizontal
              key={i}
              _id={`${Math.random()}`}
              category="one" 
              title="Ultra music festival" 
            />
          )) }

          <h2>Browse laptops</h2>
          { Array(5).fill(null).map((_, i) => (
            <ArticleCardHorizontal
              key={i}
              _id={`${Math.random()}`}
              category="one" 
              title="Ultra music festival" 
            />
          )) }
        </div>
      </div>
    </>
  )
}

export default Home
