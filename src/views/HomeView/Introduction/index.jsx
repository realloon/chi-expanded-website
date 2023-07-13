import { useEffect, useState } from 'react'
// components
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
//
import './index.css'

export default function Preview({ title, affiliation }) {
  const [cover, setCover] = useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    // text content
    import(`assets/documents/introductions/${affiliation}.md`)
      .then(module => module.default)
      .then(markdownPath => fetch(markdownPath))
      .then(res => res.text())
      .then(markdown => setContent(markdown))

    // cover
    import(`assets/images/covers/${affiliation}.jpg`)
      .then(module => module.default)
      .then(coverPath => setCover(coverPath))
  }, [affiliation])

  return (
    <article id={title.toLowerCase()} className="preview">
      <h1>
        <a href={`#${affiliation}`}>{title}</a>
      </h1>

      <div className="content-wrapper">
        <figure>
          <Link to={`/detail/${affiliation}`}>
            <img src={cover} alt={`${affiliation} mod cover`} />
          </Link>
        </figure>

        <section className="paragraph-wrapper">
          <ReactMarkdown>{content}</ReactMarkdown>

          <div className="button-wrapper">
            <Link to={`/detail/${affiliation}`}>Learn more</Link>
          </div>
        </section>
      </div>
    </article>
  )
}