import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork"

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  )
}

export default App
