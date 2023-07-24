import documents from 'assets/documents.json'
//
import { useEffect, useState } from 'react'
// components
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { HashLink } from 'components'
//
import './index.css'

const { introduction } = documents

export default function Preview({ affiliation }) {
  const [coverPath, setCoverPath] = useState(null)

  useEffect(() => {
    // cover
    import(`assets/images/covers/${affiliation}.jpg`)
      .then(module => module.default)
      .then(coverPath => setCoverPath(coverPath))
  }, [affiliation])

  return (
    <article
      id={introduction[affiliation].title.toLowerCase()}
      className="introduction"
    >
      <h1>
        <HashLink to={`#${affiliation}`}>
          {introduction[affiliation].title}
        </HashLink>
      </h1>

      <div className="content-wrapper">
        <section className="cover-wrapper">
          <Link to={`/detail/${affiliation}`}>
            <img src={coverPath} alt={`${affiliation} mod cover`} />
          </Link>
        </section>

        <section className="paragraph-wrapper">
          <ReactMarkdown>{introduction[affiliation].content}</ReactMarkdown>

          <div className="button-wrapper">
            <Link to={`/detail/${affiliation}`}>了解更多</Link>
          </div>
        </section>
      </div>
    </article>
  )
}
