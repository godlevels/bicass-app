import Benefits from "./components/Benefits"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Pricing from "./components/Pricing"
import Support from "./components/Support"


function App() {

  return (
    <div className="w-full overflow-hidden">
      <div className="">
        <Hero />
        <Support />
        <Features />
        <Benefits />
        <Pricing />
        <Info />
        <Footer />
      </div>
    </div>
  )
}

export default App
