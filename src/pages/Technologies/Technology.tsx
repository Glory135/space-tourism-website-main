import "./technology.css";
import { data } from "../../data";
import { useState } from "react";

const TechData = data.technology;
export const Technology = () => {
  const [tech, setTech] = useState(TechData[0]);

  return (
    <div className='tech'>
      <div className='tech-container'>
        <div className='tech-desc'>
          <div className='page-label'>
            <span className='num'>03</span> Space launch 101
          </div>
          <div className='tech-desc-container'>
            <div className='nav-nums'>
              <div
                onClick={() => setTech(TechData[0])}
                className={
                  tech === TechData[0] ? "tech-nav-num active" : "tech-nav-num"
                }
              >
                1
              </div>
              <div
                onClick={() => setTech(TechData[1])}
                className={
                  tech === TechData[1] ? "tech-nav-num active" : "tech-nav-num"
                }
              >
                2
              </div>
              <div
                onClick={() => setTech(TechData[2])}
                className={
                  tech === TechData[2] ? "tech-nav-num active" : "tech-nav-num"
                }
              >
                3
              </div>
            </div>
            <div className='tech-desc-main'>
              <div className='tech-desc-main-first'> The terminology...</div>
              <div className='tech-desc-main-second'>{tech.name} </div>
              <div className='tech-desc-main-third'>{tech.description}</div>
            </div>
          </div>
        </div>
        <div className='tech-img'>
          <img src={tech.images.portrait.toString()} alt='technology' />
        </div>
      </div>
    </div>
  );
};
