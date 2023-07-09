// components
import { Link, NavLink } from 'react-router-dom'
import { IconLinks } from 'components'
// config
import pageConfig from 'configs/pageConfig.json'
// image
import steam from 'assets/steam-logo.svg'
import bilibili from 'assets/bilibili-logo.svg'
import developer from 'assets/developer.svg'
// style
import './index.css'

const iconLinks = [
  {
    icon: developer,
    URL: pageConfig.links.modDeveloperURL,
  },
  {
    icon: steam,
    URL: pageConfig.links.modHomepageURL,
  },
  {
    icon: bilibili,
    URL: pageConfig.links.bilibiliProfileURL,
  },
]

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to={'/'}>{pageConfig.headerTitle}</Link>
      </h1>

      <nav className="view-nav">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/update'}>Update</NavLink>
        <NavLink to={'/donate'}>Donate</NavLink>
      </nav>

      <nav className="link-nav">
        <IconLinks iconLinks={iconLinks} />
      </nav>
    </header>
  )
}
