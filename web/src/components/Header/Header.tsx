import { Link, routes } from '@redwoodjs/router'
import 'src/index.css'

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <Link to={routes.posts()}>Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
