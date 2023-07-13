import { useEffect, useState } from 'react'

export default function Texture({ texPath, ...rest }) {
  const [texture, setTexture] = useState(null)

  useEffect(() => {
    import(`./${texPath}.png`)
      .then(module => module.default)
      .then(data => setTexture(data))
  }, [texPath])

  return <img src={texture} {...rest} />
}
