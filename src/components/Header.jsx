
import { useState, useEffect} from "react"
import "../styles/Header.css"
import { Moon, Sun } from "../components/Icons"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-text">PlutoBlocks</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => scrollToSection("introduction")}>Introduction</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection("how-it-works")}>How It Works</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection("example-blocks")}>Example Blocks</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection("try-demo")}>Try Demo</button>
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  )
}

export default Header
