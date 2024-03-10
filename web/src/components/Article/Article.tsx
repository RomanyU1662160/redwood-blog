type ArticleProps = {
  article: {
    id: number
    title: string
    body: string
    createdAt: string
  }
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>{article.createdAt}</p>
    </article>
  )
}

export default Article
