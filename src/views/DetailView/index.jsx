// hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Detail from './Detail'
import DefPanel from './DefPanel'
// config
import pageConfig from 'configs/pageConfig.json'
// images
import steam from 'assets/steam-logo.svg'
import download from 'assets/download.svg'
// style
import './index.css'

export default function DetailView() {
  const { affiliation } = useParams()

  const [cover, setCover] = useState(null)
  const [collection, setCollection] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0, 'instant')

    import(`assets/images/covers/${affiliation}.jpg`)
      .then(module => module.default)
      .then(cover => setCover(cover))

    import(`database/${affiliation}.json`)
      .then(module => module.default)
      .then(json => {
        setCollection(json)
      })
  }, [affiliation])

  return (
    <main>
      <h2 hidden>{`${affiliation} mod detail`}</h2>

      <div className="detail-view-wrapper">
        <article>
          <section className="typography">
            <Detail affiliation={affiliation} />
          </section>

          <DefPanel collection={collection} />
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
