import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Quiz from './components/Quiz'
import NotFound from './components/NotFound'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <Testimonials />
              <Team />
              <Pricing />
              <FAQ />
              <Newsletter />
              <Contact />
            </main>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
