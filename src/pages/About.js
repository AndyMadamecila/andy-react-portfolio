import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/andy2.jpeg"

const About = () => {
  return (
    <>
      <Navbar /> 

          <div id="about-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Aboutpage
              </h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className="wrapper">
        <div className="overlay">
          <div className="container1"> 

 

      <div id="about">
        <div className="container">
          <div className="col pt-5 pb-5">
            <div className="card shadow p-5">
            <div className="row">
              <div className="col-lg-12">
               <center><img src={myImage}/></center>
            </div>
            <div className="col-lg-12">
              <div className="card shadow mb-3 mt-5 p-3 ">
              <h4 className="text-dark"><span>About Me</span></h4>
             <p>Hi i'm Andy B. Madamecila Jr. Im 23 Years Old Studied In Central Philipphines State University (CPSU) taking a course of Bachelor of Science in Information Technology(BSIT) I have interested to PC Repair, PC Assemble Disassemble sometimes i like Networking.</p>
              </div>
              <div className="card shadow p-3 ">
              <h4 className="text-dark"><span>Academic Journey</span></h4>
             <p>Primary: Julian P Gomilla Elementary School  S.Y: 2006-2013<br />Secondary: Juan Gequillana National High School S.Y: 2013-2020<br /> Tretiary: Central Phillipines State University (CPSU)</p>
              </div>
            </div>
              </div> 
          </div>
        </div>
      </div>
      </div>


          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
