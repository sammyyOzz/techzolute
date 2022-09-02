import { ArticleListByCategory } from '@features/articles/components/article-list-by-category/article-list-by-category.component'
import { ArticleNewsList } from '@features/articles/components/article-news-list/article-news-list.component'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ width: 'calc(70% - 30px)' }}>
        
          <ArticleListByCategory /> 
        
        </div>

        <div style={{ width: '30%' }}>
          <ArticleNewsList />
        </div>
      </div>
    </>
  )
}

export default Home
