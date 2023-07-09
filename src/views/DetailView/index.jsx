// hooks
import { useParams } from 'react-router-dom'
// components
import { Link } from 'react-router-dom'
import { Detail } from 'components'
// style
import './index.css'
import { useEffect } from 'react'

export default function DetailView() {
  const { affiliation } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0, 'instant')
  }, [])

  return (
    <main>
      <h2 hidden>{`${affiliation} mod detail`}</h2>

      <Detail affiliation={affiliation} />

      <Link to="/">Back to Home</Link>
    </main>
  )
}
