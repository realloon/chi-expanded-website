import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useEffect, useState } from 'react'
//
import pageConfig from 'configs/pageConfig.json'
import './index.css'

export default function Preview({ title, affiliation }) {
  const modURL = pageConfig.modURL[affiliation]

  const [content, setContent] = useState(null)
  const [cover, setCover] = useState(null)

  useEffect(() => {
    // text content
    import(`articles/${affiliation}.md`)
      .then(module => module.default)
      .then(markdownPath => fetch(markdownPath))
      .then(res => res.text())
      .then(markdown => setContent(markdown))

    // cover
    import(`assets/images/${affiliation}.jpg`)
      .then(module => module.default)
      .then(coverPath => setCover(coverPath))
  }, [affiliation])

  return (
    <article id={title.toLowerCase()} className="preview">
      <h1>
        <a href={modURL}>{title}</a>
      </h1>

      <div className="content-wrapper">
        <figure>
          <a href={modURL}>
            <img src={cover} alt={`${affiliation} mod cover`} />
          </a>
        </figure>

        <section className="paragraph-wrapper">
          <ReactMarkdown>{content}</ReactMarkdown>

          <div className="button-wrapper">
            <a href={modURL}>Learn more</a>
          </div>
        </section>
      </div>
    </article>
  )
}
