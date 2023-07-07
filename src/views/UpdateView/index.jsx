import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
// articles
import updatesPath from 'articles/updates.md'
// style
import './index.css'

export default function UpdateView() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch(updatesPath)
      .then(res => res.text())
      .then(markdown => setContent(markdown))
  }, [])

  return (
    <main>
      <h2 hidden>Updates history</h2>

      <ReactMarkdown className="updates">{content}</ReactMarkdown>
    </main>
  )
}
