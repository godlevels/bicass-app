import Collabs from "./components/Collabs"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Support from "./components/Support"


function App() {

  return (
    <div className="w-full overflow-hidden">
      <div className="">
        <Navbar />
        <Hero />
        <Collabs />
        <Support />
      </div>
    </div>
  )
}

export default App
