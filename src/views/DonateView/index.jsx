import QR from 'assets/QR-demo.png'
import heart from 'assets/heart-fill.svg'
// text
import contentPath from 'assets/documents/donate.md'
import sponsorshipList from 'assets/sponsorshipList.json'
// methods
import { marked } from 'marked'
import { useEffect, useState } from 'react'
// components
import { SponsorshipList } from 'components'
// style
import './index.css'

export default function DonateView() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch(contentPath)
      .then(res => res.text())
      .then(markdown => marked(markdown, { mangle: false, headerIds: false }))
      .then(html => setContent(html))
  }, [])

  return (
    <main>
      <div className="sponsorship-list-wrapper">
        <h2>Sponsorship list</h2>

        <SponsorshipList list={sponsorshipList} />
      </div>

      <div className="heart-warpper">
        <img src={heart} alt="heart" />
      </div>

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
