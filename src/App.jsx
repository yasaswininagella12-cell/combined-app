import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import AnimatedStats from './components/AnimatedStats'
import Team from './components/Team'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import CountdownTimer from './components/CountdownTimer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Quiz from './components/Quiz'
import NotFound from './components/NotFound'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <Testimonials />
              <AnimatedStats />
              <Team />
              <Pricing />
              <FAQ />
              <Newsletter />
              <CountdownTimer />
              <Contact />
            </main>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}

export default App
