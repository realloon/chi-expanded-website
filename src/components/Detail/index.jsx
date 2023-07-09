import { useEffect, useState } from 'react'
// components
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './index.css'

export default function Detail({ affiliation }) {
  const [content, setContent] = useState(null)

  useEffect(() => {
    import(`articles/${affiliation}-detail.md`)
      .then(module => module.default)
      .then(markdownPath => fetch(markdownPath))
      .then(res => res.text())
      .then(markdon => setContent(markdon))
  }, [affiliation])

  return (
    <section className="typography">
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  )
}
