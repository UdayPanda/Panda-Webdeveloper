import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/User/Hero'
import About from './components/User/About'
import Skills from './components/User/Skills'
import Projects from './components/User/Projects'
import Contact from './components/User/Contact'
import Footer from './components/Footer'
import { ProfileContext } from './context/ProfileContext'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { miscellaneous } = useContext(ProfileContext)
  const title = document.title

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = title + miscellaneous.mission
  }, [miscellaneous.mission])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#052776] via-orange-500/80 to-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
