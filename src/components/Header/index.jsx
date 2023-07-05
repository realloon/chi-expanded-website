// components
import { Link } from 'react-router-dom'
// config
import pageConfig from 'configs/pageConfig.json'
import headerNavLinks from 'configs/headerNavLinks.json'
// image
import love from 'assets/love.svg'
// style
import './index.css'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to={'/'}>{pageConfig.websiteTitle}</Link>
      </h1>

      <nav className="view-nav">
        <Link to={'/'}>Home</Link>
        <Link to={'/update'}>Update</Link>
        <Link to={'/donate'}>
          Donate
          <img src={love} alt="" />
        </Link>
      </nav>

      <nav className="link-nav">
        <ul>
          {headerNavLinks.map(link => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
