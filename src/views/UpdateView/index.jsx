// articles
import documents from 'assets/documents.json'
// components
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
// style
import './index.css'

const { updateLogs } = documents

const AllLogs = Object.values(updateLogs).flat()

export default function UpdateView() {
  return (
    <main>
      <h2 hidden>Updates history</h2>

      {AllLogs.map(log => (
        <article
          id={`${log.typeof}#v${log.version}`}
          className="updates-wrapper"
          key={crypto.randomUUID()}
        >
          <div className="timeline-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path
                fillRule="evenodd"
                d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <section className="info-wrapper">
            <h1>{log.title}</h1>
            <span className="version">
              <svg
                aria-label="Tag"
                role="img"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
              </svg>
              {log.version}
            </span>
            <span className="date">
              <time dateTime={log.updateTime}>{log.updateTime}</time> /{' '}
              {log.author}
            </span>
            <Link to={`/detail/${log.typeof}`} className="typeof">
              {log.typeof}
            </Link>
          </section>

          <section className="detaile-wrapper">
            <ReactMarkdown>{log.content}</ReactMarkdown>
          </section>
        </article>
      ))}
    </main>
  )
}
