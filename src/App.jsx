import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Quiz from './components/Quiz'

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
            </main>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App