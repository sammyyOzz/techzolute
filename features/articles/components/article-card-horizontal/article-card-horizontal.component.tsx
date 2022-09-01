import Link from 'next/link'
import {
    Body,
    Image,
    Root,
} from './article-card-horizontal.styles'

interface ArticleCardHorizontalProps {
    _id: string;
    large?: boolean;
    title: string;
    category: string;
    imagePreview?: string;
    excerpt?: string;
}

export function ArticleCardHorizontal({ 
    _id,
    large, 
    title, 
    category,
    imagePreview, 
    excerpt 
}: ArticleCardHorizontalProps) {

    return (
        <Link href={`/${category}/${_id}`}>
            <Root large={large}>
                <Image
                    src={imagePreview || "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                    alt="" 
                    large={large}
                />
                <Body>
                    <div className="title">{ title }</div>
                    { excerpt && <div className="excerpt">{ excerpt }</div> }
                    <div className="date-and-author">
                        02 June 2022 - by Victoria Rawson
                    </div>
                </Body>
            </Root>
        </Link>
    )
}