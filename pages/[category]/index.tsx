import { NextPage } from "next";
import { ArticleResultsList } from "@features/articles/components/article-results-list/article-results-list.component";
import { useRouter } from "next/router";


const Category: NextPage = () => {
    const router = useRouter()
    const category = router.query?.category as string || ''
   
    return (
        <>
            <ArticleResultsList category={category} />
        </>
    )
}

export default Category