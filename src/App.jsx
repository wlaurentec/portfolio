import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  )
}

export default App
