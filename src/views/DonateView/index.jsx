import QR from 'assets/QR-demo.png'
// text
import contentPath from 'articles/donate.md'
//
import { marked } from 'marked'
import { useEffect, useState } from 'react'
//
import './index.css'

export default function DonateView() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch(contentPath)
      .then(res => res.text())
      .then(markdown => marked(markdown, { mangle: false, headerIds: false }))
      .then(html => setContent(html))
  }, null)

  return (
    <main>
      <div className="donate">
        <div className="wrapper">
          <article
            className="paragraph-wrapper"
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>

          <figure>
            <img src={QR} alt="" />
            <figcaption>Demo</figcaption>
          </figure>
        </div>
      </div>
    </main>
  )
}
