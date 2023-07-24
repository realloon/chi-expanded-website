// config
import pageConfig from 'configs/pageConfig.json'
import mods from 'configs/mods.json'
// logo
import github from 'assets/github-logo.svg'
// component
import { Link } from 'react-router-dom'
import { IconLinks } from 'components'
// style
import './index.css'

const iconLinks = [
  {
    icon: github,
    URL: pageConfig.websiteGithubURL,
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="line-1">
        <section>
          <h2>{pageConfig.websiteName}</h2>
          <p>加入我们</p>
        </section>

        <nav>
          <span>百科</span>
          <ul>
            <li>ThingDefs</li>
          </ul>
        </nav>

        <nav>
          <span>模组详情</span>
          <ul>
            {Object.keys(mods).map(id => (
              <li key={id}>
                <Link to={`/detail/${id}`}>{mods[id].name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <span>关于</span>
          <ul>
            <li>开发团队</li>
            <li>网站维护</li>
            <li>赞助名单</li>
          </ul>
        </nav>
      </div>

      <div className="line-2">
        <section className="copyright">
          <p>
            Copyright © 2023 <span>{pageConfig.websiteName}</span>
          </p>
        </section>

        <section className="text-links">
          <ul>
            <li>
              <a href="Terms">Terms</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
          </ul>
        </section>

        <section className="more-links">
          <IconLinks iconLinks={iconLinks} />
        </section>
      </div>
    </footer>
  )
}
