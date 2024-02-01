import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { StarsCanvas } from "./components/canvas";
import CustomCursor from "./components/custom_cursor/CustomCursor";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Details from "./components/Details";
function App() {
  return (
    <div className="bg-white overflow-hidden font-[Rajdhani]">
      {/* <CustomCursor /> */}
      <AnimatedCursor color="159, 228, 208" innerScale={1} innerSize={20} trailingSpeed={15}/>
      <div className="overflow-hidden">
        <Navbar />
        <div className="relative z-0 bg-black">
          <Hero />
          <Details />
          {/* <About /> */}
          <StarsCanvas />
        </div>

      </div>
    </div>
  );
}

export default App;
