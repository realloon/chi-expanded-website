// img
import banner from 'assets/images/banner.jpg'
import animal from 'assets/images/animal.jpg'
import music from 'assets/images/music.jpg'
import faction from 'assets/images/faction.jpg'
import equipment from 'assets/images/equipment.jpg'
import narrator from 'assets/images/narrator.jpg'
import storytellers from 'assets/images/storytellers.jpg'
// articles
import summaryPath from 'articles/summary.md'
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
  return (
    <div>
      <Banner img={banner} />

      <main>
        <Summary covers={summaryCovers} filePath={summaryPath} />

        <Preview title="Animal" affiliation="animal" />

        <Preview title="Music" affiliation="music" />

        <Preview title="Faction" affiliation="faction" />

        <Preview title="Equipment" affiliation="equipment" />

        <Preview title="Narrator" affiliation="narrator" />

        <Preview title="Storytellers" affiliation="storytellers" />
      </main>
    </div>
  )
}
