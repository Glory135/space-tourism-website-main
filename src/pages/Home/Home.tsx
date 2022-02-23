import { Link } from "react-router-dom";
import "./home.css";
export const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-text'>
          <div className='home-text-first'> So, you want to travel to</div>
          <div className='home-text-second'>Space</div>
          <div className='home-text-third'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className='home-second'>
          <Link className='Link' to='/destination'>
            <div className='home-second-container'>
              <div className='home-second-text'>Explore</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
