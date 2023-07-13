// hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import { Texture } from 'components'
import Detail from './Detail'
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
  const [collection, setCollection] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0, 'instant')

    import(`assets/images/covers/${affiliation}.jpg`)
      .then(module => module.default)
      .then(cover => setCover(cover))

    import('database/test.json')
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

          <section className="list">
            {collection.map(item => (
              <div className="item" key={item.defName}>
                <figure>
                  <figcaption>{item.label}</figcaption>
                  <Texture
                    texPath={item.texPath}
                    alt={`${item.label} texture`}
                  />
                </figure>

                <p className="description">
                  {item.description.split('\\n\\n')[0]}
                </p>

                <table>
                  <tbody>
                    {Object.keys(item.stats)
                      .filter(key => key !== 'DeteriorationRate')
                      .toSorted((a, b) => a.localeCompare(b))
                      .map(key => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{item.stats[key]}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))}
          </section>
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
