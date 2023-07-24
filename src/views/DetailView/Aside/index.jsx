// images
import steam from 'assets/steam-logo.svg'
import download from 'assets/download.svg'
//
import mods from 'configs/mods.json'
//
import './index.css'
import { Link } from 'react-router-dom'

/**
 * Detaile view Aside component
 * @param {string} cover - cover image path
 * @param {string} affiliation - the identifier for mod
 */
export default function Aside({ cover, affiliation }) {
  const { steamPath } = mods[affiliation]

  return (
    <aside>
      <figure>
        <a href={steamPath}>
          <img src={cover} alt={`${affiliation} mod cover`} />
        </a>
      </figure>

      <nav data-name="nav">
        <a
          href={steamPath}
          title="Subscribe on the Workshop"
          data-name="subscribe"
        >
          <img src={steam} data-name="steam" alt="steam icon" />
          Steam 订阅
        </a>
        <a href="/download/:affiliation" title="Download to local">
          <img src={download} alt="cloud download icon" />
          本地下载
        </a>
      </nav>

      <nav>
        <h3>其他模组</h3>

        {Object.keys(mods)
          .filter(id => id !== affiliation)
          .map(id => (
            <Link key={id} to={`/detail/${id}`}>
              <span
                className="color"
                style={{ backgroundColor: mods[id].color }}
              ></span>
              {mods[id].name}
            </Link>
          ))}
      </nav>
    </aside>
  )
}
