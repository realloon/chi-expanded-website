//
import pageConfig from 'configs/pageConfig.json'
import documents from 'assets/documents.json'
//
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
// style
import './index.css'

const getFileNameFromPath = path => path.split('/').pop().split('.')[0]

const { summary } = documents

export default function Summary({ covers }) {
  return (
    <article className="summary">
      <section className="paragraph-wrapper">
        <h1>{summary.title}</h1>
        <ReactMarkdown>{summary.content}</ReactMarkdown>

        <a className="button" href={pageConfig.modHomepageURL}>
          Try it!
        </a>
      </section>

      <section className="cover-wrapper">
        {covers.map(cover => (
          <a key={crypto.randomUUID()} href={'#' + getFileNameFromPath(cover)}>
            <img src={cover} alt={getFileNameFromPath(cover) + ' mode cover'} />
          </a>
        ))}
      </section>
    </article>
  )
}
