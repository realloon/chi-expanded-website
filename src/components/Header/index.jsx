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

const scrolltoTop = () => {
  window.scrollTo({ top: 0 })
}

export default function Header() {
  return (
    <header className="header">
      <h1 onClick={scrolltoTop}>
        <Link to={'/'}>{pageConfig.headerTitle}</Link>
      </h1>

      <nav className="view-nav">
        <NavLink to={'/'}>主页</NavLink>
        <NavLink to={'/'} title="功能开发中">
          百科
        </NavLink>
        <NavLink to={'/update'}>更新日志</NavLink>
        <NavLink to={'/donate'}>捐赠</NavLink>
      </nav>

      <nav className="link-nav">
        <IconLinks iconLinks={iconLinks} />
      </nav>
    </header>
  )
}
