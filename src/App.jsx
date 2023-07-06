// components
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from 'components'
// views
import { HomeView, DonateView, UpdateView } from 'views'
// style
import './App.css'

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/donate" element={<DonateView />} />
        <Route path="/update" element={<UpdateView />} />
      </Routes>

      <Footer />
    </div>
  )
}
