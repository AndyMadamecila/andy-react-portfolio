import "./Portfolio.css";
import Navbar from "./Navbar";
import andy3Image from "./img/andy3.png"
import andy4Image from "./img/andy4.png"
import andy5Image from "./img/andy5.png"
import aImage from "./img/a.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={andy3Image} />
          <h4 className="mt-5 text-center">My final Frontend Project</h4>

          <center>
                <a href="https://andymadamecila.github.io/andy123/" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          <div className="col">
          <img className="two" src={andy4Image} />
          <h4 className="mt-5 text-center">My Frontend Project</h4>
          </div>
          <div className="col">
          <img className="three" src={andy5Image} />
          <h4 className="mt-5 text-center">My Thesis</h4>   
          </div>
          <div className="col">
          <img className="four" src={aImage} />
          <h4 className="mt-5 text-center">Portfolio</h4>

          <center>
                <a href="https://andymadamecila.github.io/andy/" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
