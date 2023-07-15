import QR from 'assets/QR-demo.png'
import heart from 'assets/heart-fill.svg'
// text
import documents from 'assets/documents.json'
import sponsorshipList from 'configs/sponsorshipList.json'
// components
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import SponsorshipList from './SponsorshipList'
// style
import './index.css'

const { donate } = documents

export default function DonateView() {
  return (
    <main>
      <div className="sponsorship-list-wrapper">
        <h2>Sponsorship list</h2>

        <SponsorshipList list={sponsorshipList} />
      </div>

      <div className="heart-warpper">
        <img src={heart} alt="Thank you." />
      </div>

      <div className="donate">
        <div className="wrapper">
          <article className="paragraph-wrapper">
            <ReactMarkdown>{donate}</ReactMarkdown>
          </article>

          <figure>
            <img src={QR} alt="" />
            <figcaption>Demo</figcaption>
          </figure>
        </div>
      </div>
    </main>
  )
}
