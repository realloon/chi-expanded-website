// img
import banner from 'assets/images/banner.jpg'
import animal from 'assets/images/animal.jpg'
import music from 'assets/images/music.jpg'
import faction from 'assets/images/faction.jpg'
import equipment from 'assets/images/equipment.png'
import narrator from 'assets/images/narrator.png'
import storytellers from 'assets/images/storytellers.png'
// articles
import summaryPath from 'articles/summary.md'
import animalPath from 'articles/animal.md'
import musicPath from 'articles/music.md'
import factionPath from 'articles/faction.md'
// methods
import { marked } from 'marked'
import { useEffect, useState } from 'react'
// components
import { Summary, Preview, Banner } from 'components'

const summaryCovers = [
  animal,
  music,
  faction,
  equipment,
  narrator,
  storytellers,
] // The order here determines the order of display.

export default function HomeView() {
  // TODO: use ReactMarkdown instanceof markde
  const useMarkdown = paths => {
    const [contents, setContents] = useState([])

    useEffect(() => {
      Promise.all(
        paths.map(path =>
          fetch(path)
            .then(res => res.text())
            .then(markdown =>
              marked(markdown, { mangle: false, headerIds: false })
            )
        )
      ).then(setContents)
    }, [])

    return contents
  }

  // use 'useMarkdown' hook
  const [animalContent, musicContent, factionContent] = useMarkdown([
    animalPath,
    musicPath,
    factionPath,
  ])

  return (
    <div>
      <Banner img={banner} />

      <main>
        <Summary covers={summaryCovers} filePath={summaryPath} />

        <Preview title="Animal" cover={animal} to="animal">
          {animalContent}
        </Preview>

        <Preview title="Music" cover={music} to="music">
          {musicContent}
        </Preview>

        <Preview title="Faction" cover={faction} to="faction">
          {factionContent}
        </Preview>
      </main>
    </div>
  )
}
