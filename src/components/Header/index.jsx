// components
import { Link } from 'react-router-dom'
import { IconLinks } from 'components'
// config
import pageConfig from 'configs/pageConfig.json'
// image
import love from 'assets/love.svg'
import steam from 'assets/steam-logo.svg'
import bilibili from 'assets/bilibili-logo.svg'
import developer from 'assets/developer.svg'
// style
import './index.css'

const iconLinks = [
  {
    icon: developer,
    URL: 'developer',
  },
  {
    icon: steam,
    URL: 'steam',
  },
  {
    icon: bilibili,
    URL: 'bilibili',
  },
]

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to={'/'}>{pageConfig.headerTitle}</Link>
      </h1>

      <nav className="view-nav">
        <Link to={'/'}>Home</Link>
        <Link to={'/update'}>Update</Link>
        <Link to={'/donate'}>
          Donate
          <img src={love} alt="click to donate page" />
        </Link>
      </nav>

      <nav className="link-nav">
        <IconLinks iconLinks={iconLinks} />
      </nav>
    </header>
  )
}
