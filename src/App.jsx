import Home from "./pages/Home"
import './App.css'
import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import Work from "./pages/work/Work"
import Private from "./pages/Private/Private"
import Event from "./pages/event/Event"
import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"

const App = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };
  return (
    <div className="transition-all duration-300 scroll-smooth">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/private' element={<Private />} />
        <Route path='/event' element={<Event />} />
      </Routes>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-2 text-base rounded dark:text-black dark:bg-gray-100 bottom-8 right-8 hover:bg-base-300 dark:hover:bg-slate-500 hover:text-black"
        >
          <MdOutlineKeyboardArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  )
}

export default App