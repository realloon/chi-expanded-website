import { useEffect, useRef, useState } from 'react'
// import { Texture } from 'components'
import { Search } from 'components'
import info from 'assets/images/icon/info.svg'
import './index.css'

export default function DefPanel({ collection }) {
  const [filterCollection, setFilterCollection] = useState([])

  const loading = useRef()

  useEffect(() => {
    if (collection.length > 0) {
      // loading.current.style.height = '0px'
    }
    setFilterCollection(collection)
  }, [collection])

  const search = event => {
    const { value: keyword } = event.target

    setFilterCollection(
      collection.filter(
        item =>
          item.label?.includes(keyword) || item.description?.includes(keyword)
      )
    )
  }

  return (
    <section className="def-panel">
      <div className="tool-bar">
        <Search
          placeholder="输入关键字进行模糊搜索"
          onChange={e => search(e)}
        />
      </div>

      <div className="def-list">
        {filterCollection.map(item => (
          <div className="item" key={item.defName}>
            <figure>
              <figcaption>{item.label}</figcaption>
              {/* <Texture texPath={item.texPath} /> */}
            </figure>

            <p className="description">
              {item.description?.split('\\n\\n')[0]}

              {item.description?.split('\\n\\n').length > 1 && (
                <img
                  className="info-icon"
                  src={info}
                  alt="了解更多"
                  title={item.description
                    ?.split('\\n\\n')
                    .filter((_, index) => index > 0)
                    .join('\n\n')}
                />
              )}
            </p>

            <table>
              <tbody>
                {Object.keys(item.stats)
                  // .filter(key => key !== 'DeteriorationRate')
                  .toSorted((a, b) => a.localeCompare(b))
                  .map(key => (
                    <tr key={key}>
                      <td>{key}</td>
                      {/* FIXME: */}
                      <td>{item.stats[key]._ || item.stats[key]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        <span style={{ textAlign: 'center', opacity: '0.7' }}>
          {filterCollection.length} results
        </span>
      </div>
    </section>
  )
}
