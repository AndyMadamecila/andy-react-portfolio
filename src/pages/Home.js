import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/andy1.png"

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">




      <div id="home-info">
      
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 lizel">
              <div className="card">
              <h3 className=" display-3 text-center  pt-5 mb-5">
               Hello i'm Andy B. Madamecila Jr. 
              </h3> 
              <h4 className="text-center text-center mt-5">Studied In Central Philipphines State University (CPSU)</h4>
              <h4 className="text-center text-center mt-5">I like to player online games like Mobile legend Bangbang (MLBB) and Clash of Clans (COC)</h4>
              <br />
              <ul>
               <center><h5></h5></center> 
              </ul>
               <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
              </div>
            </div>
            <div className="col-lg-6 img">
            <div className="card">
            <img src={myImage}/>
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

export default Home;
