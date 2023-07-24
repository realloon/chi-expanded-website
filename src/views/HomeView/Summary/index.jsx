//
import pageConfig from 'configs/pageConfig.json'
import documents from 'assets/documents.json'
//
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { HashLink } from 'components'
// style
import './index.css'

const getFileNameFromPath = path => path.split('/').pop().split('.')[0]

const { summary } = documents

export default function Summary({ covers }) {
  return (
    <article className="summary" id="summary">
      <section className="paragraph-wrapper">
        <h1>
          <HashLink to="#summary">{summary.title}</HashLink>
        </h1>
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
