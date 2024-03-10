import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

/* articles is the name of posts query in graphQl file*/
export const QUERY: TypedDocumentNode<
  ArticlesQuery,
  ArticlesQueryVariables
> = gql`
  query ArticlesQuery {
    articles: posts {
      id
      body
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <div className="row">
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Link to={routes.article({ id: article.id })}>
              <div className="card">
                <h2>{article.title}</h2>
                <p>{article.body}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
