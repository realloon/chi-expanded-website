import './App.css'

import banner from 'images/banner.jpg'
import beast from 'images/beast.jpg'
import music from 'images/music.jpg'
import faction from 'images/faction.jpg'

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Chi-Expanded Series of mods</h1>
        <nav>
          <ul>
            <li>
              <a href="https://steamcommunity.com/profiles/76561198335073703">
                Author
              </a>
            </li>
            <li>
              <a href="https://steamcommunity.com/profiles/76561198335073703">
                Steam Community
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img src={banner} alt="no alt yet." />
      </div>
      <main>
        <article>
          <p>神州文化系列 Chi-Expanded Series of mods</p>
        </article>

        <div className="carousel">
          <a href="">
            <img src={beast} alt="" />
          </a>
          <a href="">
            <img src={music} alt="" />
          </a>
          <a href="">
            <img src={faction} alt="" />
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
