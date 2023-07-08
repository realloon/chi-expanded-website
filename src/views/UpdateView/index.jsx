import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
// articles
import updatesPath from 'articles/updates.md'
// style
import './index.css'

export default function UpdateView() {
  const [contents, setContents] = useState(null)

  useEffect(() => {
    fetch(updatesPath)
      .then(res => res.text())
      .then(markdown => markdown.split('---')) // split each update log.
      .then(contents => setContents(contents))
  }, [])

  return (
    <main>
      <h2 hidden>Updates history</h2>

      <article className="updates">
        {contents &&
          contents.map(content => (
            <section key={crypto.randomUUID()}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </section>
          ))}
      </article>
    </main>
  )
}
