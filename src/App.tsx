import { TopBar } from "./components/TopBar/TopBar";
import { Home } from "./pages/Home/Home";
import homeBG from "./assets/home/background-home-desktop.jpg";
import destinationBG from "./assets/destination/background-destination-desktop.jpg";
import crewBG from "./assets/crew/background-crew-desktop.jpg";
import technologyBG from "./assets/technology/background-technology-desktop.jpg";
import "./styles.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Destination } from "./pages/Destination/Destination";
import { Crew } from "./pages/Crew/Crew";
import { Technology } from "./pages/Technologies/Technology";

function App() {
  const navigation = useLocation();
  const location = navigation.pathname.split("/")[1];

  return (
    <main
      style={{
        backgroundImage:
          location === ""
            ? `url(${homeBG})`
            : location === "destination"
            ? `url(${destinationBG})`
            : location === "crew"
            ? `url(${crewBG})`
            : location === "technology"
            ? `url(${technologyBG})`
            : undefined,
        transition: "0.5s",
      }}
      className='main'
    >
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
