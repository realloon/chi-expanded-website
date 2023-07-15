// img
import banner from 'assets/images/covers/banner.jpg'
import core from 'assets/images/covers/core.jpg'
import animal from 'assets/images/covers/animal.jpg'
import music from 'assets/images/covers/music.jpg'
import equipment from 'assets/images/covers/equipment.jpg'
import faction from 'assets/images/covers/faction.jpg'
import narrator from 'assets/images/covers/narrator.jpg'
import storytellers from 'assets/images/covers/storytellers.jpg'
import ideology from 'assets/images/covers/ideology.jpg'
// articles
// import summaryPath from 'assets/documents/summary.md'
// components
import { Banner } from 'components'
import Introduction from './Introduction'
import Summary from './Summary'
// style
import './index.css'

// INITIAL CONFIG
const summaryCovers = [
  core,
  animal,
  music,
  equipment,
  faction,
  narrator,
  storytellers,
  ideology,
] // The order here determines the order of display.

const affiliations = [
  'core',
  'animal',
  'music',
  'faction',
  'equipment',
  'narrator',
  'storytellers',
  'ideology',
]

export default function HomeView() {
  return (
    <div>
      <Banner img={banner} />

      <main>
        <Summary covers={summaryCovers} />

        {affiliations.map(affiliation => (
          <Introduction key={crypto.randomUUID()} affiliation={affiliation} />
        ))}
      </main>
    </div>
  )
}
