// import DaisyNav from "./assets/Components/DaisyNav/DaisyNav"

import Navbar from "./assets/Components/Navbar/Navbar"
import PriceOptions from "./assets/Components/PriceOptions/PriceOptions"


function App() {

  return (
    <>
    <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-5xl bg-rose-500 p-3 text-white">Vite + React</h1>

      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
