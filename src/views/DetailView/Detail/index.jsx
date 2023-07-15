// components
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import documents from 'assets/documents.json'
import './index.css'

const { detail } = documents

export default function Detail({ affiliation }) {
  return (
    <>
      <ReactMarkdown>{detail[affiliation].content}</ReactMarkdown>
    </>
  )
}
