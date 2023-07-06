// config
import pageConfig from 'configs/pageConfig.json'
// logo
import github from 'assets/github-logo.svg'
// component
import { IconLinks } from 'components'
// style
import './index.css'

const iconLinks = [
  {
    icon: github,
    URL: 'github',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  )
}
