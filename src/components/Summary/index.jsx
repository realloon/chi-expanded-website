//
import pageConfig from 'configs/pageConfig.json'
//
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useEffect, useState } from 'react'
// style
import './index.css'

const getFileNameFromPath = path => path.split('/').pop().split('.')[0]

export default function Summary({ covers, filePath }) {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch(filePath)
      .then(res => res.text())
      .then(markdown => setContent(markdown))
  }, [filePath])

  return (
    <article className="summary">
      <section className="paragraph-wrapper">
        <ReactMarkdown>{content}</ReactMarkdown>

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
