import Header from "./componets/Header"
import Hero from "./componets/Hero"
import Categoty from "./componets/Category"
import Trending from "./componets/Trending"
import Football from "./componets/Football"
import Recent from "./componets/Recent"
import Sports from "./componets/Sports"
import Footer from "./componets/Footer"




function App() {

  return (
    <div>
      <Header />
      <div className="bg-gray-50 ">
        <Hero />
        <div className="mt-50">
          <Categoty/>
        </div>
        <Trending />
        <Football />
        <Recent />
        <Sports />
        <Footer />
      </div>
    </div>
  )
}

export default App
