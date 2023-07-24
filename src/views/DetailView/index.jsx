// hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Detail from './Detail'
import DefPanel from './DefPanel'
import Aside from './Aside'
// style
import './index.css'

export default function DetailView() {
  const { affiliation } = useParams()

  const [cover, setCover] = useState(null)
  const [collection, setCollection] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0, 'instant') // TODO: use Soommm

    import(`assets/images/covers/${affiliation}.jpg`)
      .then(module => module.default)
      .then(cover => setCover(cover))

    import(`assets/thingsDef/${affiliation}.json`)
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

        <Aside cover={cover} affiliation={affiliation} />
      </div>
    </main>
  )
}
