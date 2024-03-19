// import DaisyNav from "./assets/Components/DaisyNav/DaisyNav"

import LineChart from "./assets/Components/LineChart/LineChart"
import Navbar from "./assets/Components/Navbar/Navbar"
import PriceOptions from "./assets/Components/PriceOptions/PriceOptions"


function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
