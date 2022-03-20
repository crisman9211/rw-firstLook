import { MetaTags } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <MetaTags title="Home" description="Home page" />
        <h1>My Home Page</h1>
        <p> This page is the home!</p>
      </BlogLayout>
    </>
  )
}

export default HomePage
