import { useState, useEffect } from "react"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import HowItWorks from "./components/HowItWorks"
import ExampleBlocks from "./components/ExampleBlocks"
import TryDemo from "./components/TryDemo"
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedBlock, setSelectedBlock] = useState(null)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleBlockSelect = (block) => {
    setSelectedBlock(block)
    // Smooth scroll to demo section
    document.getElementById("try-demo").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <Introduction />
        <HowItWorks />
        <ExampleBlocks onBlockSelect={handleBlockSelect} />
        <TryDemo selectedBlock={selectedBlock} />
      </main>
      <Footer />
    </div>
  )
}

export default App

