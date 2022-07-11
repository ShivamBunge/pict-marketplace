import "./hero.css";
import React from "react";
// import Placeholder from "./../../../Assets/place-holder.svg";
// import Person1 from "./../../../Assets/person1.gif";
const Hero = () => {
  return (
    <div className="hero-area" id="hero-area">
      <div className="container">

          <div className="text-section ">
            <div className="">
              <div className="hero-title">
                PICT EXCHANGE CENTER
              </div>
              <div className="discription">
                <div className="dec-bar"></div>
                <div className="hero-Des">
                  The marketplace to find buyers for your old books and engineering tools, 
                  also find old stuff sellers from your college.
                </div>
              </div>
              <div className="hero-search"></div>
            </div>
          </div>
          <div className="col-lg-1 col-xl-1 col-md-12 col-sm-12 col-xs-12"></div>
          {/* <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
            <div className="hero-right ">
              <div className="hero-img">
                <div className="hero-solid " target="blank">
                  <img className="framperson" src={Placeholder} alt="IG" />
                  <img className=" personi " src={Person1} />
                </div>
              </div>
            </div>
          </div> */}
          {/* use this website to make gif https://ezgif.com/maker  */}

        </div>
   
    </div>
  );
};

export default Hero;
