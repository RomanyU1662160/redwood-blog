import Header from 'src/components/Header/Header'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BlogLayout
