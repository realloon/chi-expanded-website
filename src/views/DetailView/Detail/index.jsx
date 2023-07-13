import { useEffect, useState } from 'react'
// components
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './index.css'

export default function Detail({ affiliation }) {
  const [content, setContent] = useState(null)

  useEffect(() => {
    import(`assets/documents/details/${affiliation}.md`)
      .then(module => module.default)
      .then(markdownPath => fetch(markdownPath))
      .then(res => res.text())
      .then(markdon => setContent(markdon))
  }, [affiliation])

  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  )
}
