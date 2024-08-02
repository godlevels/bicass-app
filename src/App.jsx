import Benefits from "./components/Benefits"
import Collabs from "./components/Collabs"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Support from "./components/Support"


function App() {

  return (
    <div className="w-full overflow-hidden">
      <div className="">
        <Navbar />
        <Hero />
        <Collabs />
        <Support />
        <Features />
        <Benefits />
        <Pricing />
        <Info />
      </div>
    </div>
  )
}

export default App
