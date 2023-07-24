import { useEffect, useState } from 'react'
// components
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer } from 'components'
// views
import { HomeView, DonateView, UpdateView, DetailView } from 'views'
// style
import './App.css'

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width <= 576) {
      setIsMobile(true)
    }
  }, [])

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

      {isMobile && (
        <article className="err">
          <h1>请使用桌面设备访问</h1>
          <p>抱歉，本网站尚未优化移动端的页面展示效果，请使用桌面设备访问。</p>
        </article>
      )}
    </div>
  )
}
