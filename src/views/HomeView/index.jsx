import { Summary, Detail, Banner } from 'components'
// cover
import banner from 'images/banner.jpg'
import beast from 'images/beast.jpg'
import music from 'images/music.jpg'
import faction from 'images/faction.jpg'
// articles
import summaryPath from 'articles/summary.md'
import beastPath from 'articles/beast.md'
import musicPath from 'articles/music.md'
import factionPath from 'articles/faction.md'
// methods
import { marked } from 'marked'
import { useEffect, useState } from 'react'

export default function HomeView() {
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

  const [summaryContent, beastContent, musicContent, factionContent] =
    useMarkdown([summaryPath, beastPath, musicPath, factionPath])

  return (
    <div>
      <Banner img={banner} />

      <main>
        <Summary>{summaryContent}</Summary>

        <Detail title="Beast" cover={beast}>
          {beastContent}
        </Detail>

        <Detail title="Music" cover={music}>
          {musicContent}
        </Detail>

        <Detail title="Faction" cover={faction}>
          {factionContent}
        </Detail>
      </main>
    </div>
  )
}
