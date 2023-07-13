import { useEffect, useRef, useState } from 'react'
import { Texture } from 'components'
import './index.css'

export default function DefPanel({ collection }) {
  const [filterCollection, setFilterCollection] = useState([])

  const searchEl = useRef()
  const handleKeydown = event => {
    if (event.key === 'Escape') {
      event.preventDefault() // the default behavior is to clear the input

      event.target.blur()
    }
  }

  useEffect(() => {
    setFilterCollection(collection)

    const handleKeyDown = event => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()

        searchEl.current.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [collection])

  const search = e => {
    const { value: keyword } = e.target

    setFilterCollection(
      collection.filter(
        item =>
          item.label.includes(keyword) || item.description.includes(keyword)
      )
    )
  }

  return (
    <section className="def-panel">
      <div className="tool-bar">
        <input
          ref={searchEl}
          type="search"
          placeholder="Enter keywords for fuzzy"
          onChange={e => search(e)}
          onKeyDown={e => handleKeydown(e)}
        />
      </div>

      {filterCollection.map(item => (
        <div className="item" key={item.defName}>
          <figure>
            <figcaption>{item.label}</figcaption>
            <Texture texPath={item.texPath} />
          </figure>

          <p className="description">{item.description.split('\\n\\n')[0]}</p>

          <table>
            <tbody>
              {Object.keys(item.stats)
                .filter(key => key !== 'DeteriorationRate')
                .toSorted((a, b) => a.localeCompare(b))
                .map(key => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{item.stats[key]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}

      <span style={{ textAlign: 'center', opacity: '0.7' }}>
        {filterCollection.length} results
      </span>
    </section>
  )
}
