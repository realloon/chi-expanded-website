// components
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer } from 'components'
// views
import { HomeView, DonateView, UpdateView, DetailView } from 'views'
// style
import './App.css'

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/update" element={<UpdateView />} />
        <Route path="/donate" element={<DonateView />} />
        <Route path="/detail/:affiliation" element={<DetailView />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <Footer />
    </div>
  )
}
