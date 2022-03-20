import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (
    <>
      <BlogLayout>
        <MetaTags title="About" description="About page" />
        <h1>About Page</h1>
        <p> This page is the about stuff</p>
      </BlogLayout>
    </>
  )
}

export default AboutPage
