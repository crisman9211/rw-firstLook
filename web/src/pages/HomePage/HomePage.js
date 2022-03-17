import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>My Home Page</h1>
      <p> This page is the home!</p>
      <footer>
        <h3>Find me online:</h3>
        <ul>
          <li>
            <a href="https://dev.to/ajcwebdev">Blog</a>
          </li>
          <li>
            <a href="https://twitter.com/ajcwebdev">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/ajcwebdev">GitHub</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default HomePage
