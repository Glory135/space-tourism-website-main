import "./crew.css";
import { useState } from "react";
import { data } from "../../data";

const allData = data.crew;
export const Crew = () => {
  const [crew, setCrew] = useState(allData[0]);

  const handleCommander = () => {
    setCrew(allData[0]);
  };
  const handleEngineer = () => {
    setCrew(allData[3]);
  };
  const handlePilot = () => {
    setCrew(allData[2]);
  };
  const handleSpecialist = () => {
    setCrew(allData[1]);
  };
  return (
    <div className='crew'>
      <div className='crew-container'>
        <div className='crew-desc'>
          <div className='page-label'>
            <span className='num'>02</span> Meet your crew
          </div>
          <div className='desc-main'>
            <div className='position'>{crew.role}</div>
            <div className='name'>{crew.name}</div>
            <div className='desc'>{crew.bio}</div>
          </div>
          <div className='dots-container'>
            <div
              onClick={handleCommander}
              className='dot'
              style={{
                backgroundColor: crew === allData[0] ? "white" : undefined,
              }}
            ></div>
            <div
              onClick={handleSpecialist}
              className='dot'
              style={{
                backgroundColor: crew === allData[1] ? "white" : undefined,
              }}
            ></div>
            <div
              onClick={handlePilot}
              className='dot'
              style={{
                backgroundColor: crew === allData[2] ? "white" : undefined,
              }}
            ></div>
            <div
              onClick={handleEngineer}
              className='dot'
              style={{
                backgroundColor: crew === allData[3] ? "white" : undefined,
              }}
            ></div>
          </div>
        </div>

        <div className='crew-img'>
          <img src={crew.images.png.toString()} alt='crew' />
        </div>
      </div>
    </div>
  );
};
