// img
import banner from 'assets/images/banner.jpg'
import core from 'assets/images/core.jpg'
import animal from 'assets/images/animal.jpg'
import music from 'assets/images/music.jpg'
import equipment from 'assets/images/equipment.jpg'
import faction from 'assets/images/faction.jpg'
import narrator from 'assets/images/narrator.jpg'
import storytellers from 'assets/images/storytellers.jpg'
import ideology from 'assets/images/ideology.jpg'
// articles
import summaryPath from 'articles/summary.md'
// components
import { Summary, Introduction, Banner } from 'components'
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

const Introductions = [
  {
    title: 'Core',
    affiliation: 'core',
  },
  {
    title: 'Animal',
    affiliation: 'animal',
  },
  {
    title: 'Music',
    affiliation: 'music',
  },
  {
    title: 'Faction',
    affiliation: 'faction',
  },
  {
    title: 'Equipment',
    affiliation: 'equipment',
  },
  {
    title: 'Narrator',
    affiliation: 'narrator',
  },
  {
    title: 'Storytellers',
    affiliation: 'storytellers',
  },
  {
    title: 'Ideology',
    affiliation: 'ideology',
  },
]

export default function HomeView() {
  return (
    <div>
      <Banner img={banner} />

      <main>
        <Summary covers={summaryCovers} filePath={summaryPath} />

        {Introductions.map(item => (
          <Introduction
            key={crypto.randomUUID()}
            title={item.title}
            affiliation={item.affiliation}
          />
        ))}
      </main>
    </div>
  )
}
