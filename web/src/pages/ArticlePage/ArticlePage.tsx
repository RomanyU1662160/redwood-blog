import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

type Props = {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <ArticleCell id={id} rand={Math.random()} />
    </>
  )
}

export default ArticlePage
