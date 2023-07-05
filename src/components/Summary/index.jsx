// cover
import beast from 'images/beast.jpg'
import music from 'images/music.jpg'
import faction from 'images/faction.jpg'
// style
import './index.css'

const summaryImages = [beast, music, faction, faction, beast, music] // The order here determines the order of display.

const getFileNameFromPath = path => path.split('/').pop().split('.')[0]

export default function Summary({ children }) {
  return (
    <article className="summary">
      <section
        className="paragraph-wrapper"
        dangerouslySetInnerHTML={{ __html: children }}
      ></section>

      <section className="cover-wrapper">
        {summaryImages.map(img => (
          <a key={Math.random()} href={'#' + getFileNameFromPath(img)}>
            <img src={img} alt={getFileNameFromPath(img) + ' mode review'} />
          </a>
        ))}
      </section>
    </article>
  )
}
