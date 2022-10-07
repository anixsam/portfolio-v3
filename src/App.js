import NavBar from "./components/navbar/navbar";
import PortFolio from "./components/Layout/portfolio";
// import particlesConfig from "./components/widgets/particles.js/particles-config";
// import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      {/* <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div> */}
      <PortFolio />
      <NavBar />
    </div>
  );
}

export default App;
