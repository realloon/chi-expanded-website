import { marked } from 'marked'
import { useEffect, useState } from 'react'
// articles
import updatesPath from 'articles/updates.md'
// style
import './index.css'

export default function UpdateView() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch(updatesPath)
      .then(res => res.text())
      .then(markdown => marked(markdown, { mangle: false, headerIds: false }))
      .then(html => setContent(html))
  }, [])

  return (
    <main>
      <h2 hidden>Updates history</h2>

      <article
        className="updates"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </main>
  )
}
