import "./destination.css";

import { useState } from "react";
import { data } from "../../data";

export const Destination = () => {
  const [planet, setPlanet] = useState(data.destinations[0]);

  const handleMoon = () => {
    setPlanet(data.destinations[0]);
  };
  const handleMars = () => {
    setPlanet(data.destinations[1]);
  };
  const handleEuropa = () => {
    setPlanet(data.destinations[2]);
  };
  const handleTitan = () => {
    setPlanet(data.destinations[3]);
  };
  return (
    <div className='destination'>
      <div className='destiination-container'>
        <div className='destination-first'>
          <div className='page-label'>
            {" "}
            <span className='num'>01</span> Pick your destination
          </div>
          <img
            className='planet_img'
            src={planet.images.png.toString()}
            alt='planet'
          />
        </div>
        <div className='destination-second'>
          <div className='destination-second-container'>
            <div className='destination-nav'>
              <ul>
                <li
                  style={{
                    borderBottom:
                      planet === data.destinations[0]
                        ? "2px solid white"
                        : undefined,
                  }}
                  onClick={handleMoon}
                >
                  Moon
                </li>
                <li
                  style={{
                    borderBottom:
                      planet === data.destinations[1]
                        ? "2px solid white"
                        : undefined,
                  }}
                  onClick={handleMars}
                >
                  Mars
                </li>
                <li
                  style={{
                    borderBottom:
                      planet === data.destinations[2]
                        ? "2px solid white"
                        : undefined,
                  }}
                  onClick={handleEuropa}
                >
                  Europa
                </li>
                <li
                  style={{
                    borderBottom:
                      planet === data.destinations[3]
                        ? "2px solid white"
                        : undefined,
                  }}
                  onClick={handleTitan}
                >
                  Titan
                </li>
              </ul>{" "}
            </div>
            <div className='destination-planet'>{planet.name}</div>
            <div className='destination-planet-desc'>{planet.description}</div>
            <div className='div-line'></div>
            <div className='destination-travel-desc'>
              <div className='destination-travel-desc-containers'>
                <div className='travel-desc-first'>Avg. distance</div>
                <div className='travel-desc-second'>{planet.distance} </div>
              </div>
              <div className='destination-travel-desc-containers'>
                <div className='travel-desc-first'>Est. travel time</div>
                <div className='travel-desc-second'>{planet.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
