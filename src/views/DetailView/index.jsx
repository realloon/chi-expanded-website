// hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import { Detail } from 'components'
// config
import pageConfig from 'configs/pageConfig.json'
//
import steam from 'assets/steam-logo.svg'
import download from 'assets/download.svg'
// style
import './index.css'

export default function DetailView() {
  const { affiliation } = useParams()

  const [cover, setCover] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0, 'instant')

    import(`assets/images/${affiliation}.jpg`)
      .then(module => module.default)
      .then(cover => setCover(cover))
  }, [])

  return (
    <main>
      <h2 hidden>{`${affiliation} mod detail`}</h2>

      <div className="detail-view-wrapper">
        <article className="typography">
          <Detail affiliation={affiliation} />
        </article>

        <aside>
          <figure>
            <img src={cover} alt={`${affiliation} mod cover`} />
          </figure>

          <nav>
            <a
              href={pageConfig.modURL[affiliation]}
              title="Subscribe on the Workshop"
              data-name="subscribe"
            >
              <img src={steam} data-name="steam" alt="steam icon" />
              Subscribe
            </a>
            <a href="/download/:affiliation" title="Download to local">
              <img src={download} alt="cloud download icon" />
              Download
            </a>
          </nav>
        </aside>
      </div>
    </main>
  )
}
