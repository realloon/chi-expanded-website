import { useEffect, useRef } from 'react'
import './index.css'

export default function Search({ ...rest }) {
  const element = useRef()

  const handleBlur = event => {
    if (event.key === 'Escape') {
      event.preventDefault() // the default behavior is to clear the input

      event.target.blur()
    }
  }

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()

        element.current.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <input
      className="search-input"
      type="search"
      ref={element}
      onKeyDown={handleBlur}
      {...rest}
    />
  )
}
