import React from "react";
import Instagram from "./../../../Assets/Instagram.svg";
import Youtube from "./../../../Assets/youtube.svg";
import Mail from "./../../../Assets/Mail.svg";
import Twitter from "./../../../Assets/twitter.svg";
import LinkedIn from "./../../../Assets/linkedin.svg";
import "./footer.css";
import PRIVACY_NOTICE from "../../../Assets/PRIVACY_NOTICE.pdf";
import Service_Agreement from "../../../Assets/Service_Agreement.pdf";

const Footer = () => {
  return (
    <div className="footer-area text-white">
      <div className="container">
        <div className="row">
          <div class=" Left-footer col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">
            <div className=" align-self-center ">&#169;2022 Brahmastra</div>
          </div>

          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">
            <div className="center-footer ">
              <a className="footer-social" target="blank" href="">
                <img src={Instagram} alt="IG" />
              </a>
              <a className="footer-social" target="blank" href="">
                <img src={Youtube} alt="Github" />
              </a>
              <a className="footer-social" target="blank" href="">
                <img src={Mail} alt="Mail" />
              </a>
              <a className="footer-social" target="blank" href="">
                <img src={Twitter} alt="Linkedin" />
              </a>
              <a className="footer-social" target="blank" href="">
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div class=" Right-footer col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">
            <div className="align-self-center ">
              <a className="Privacy" href={PRIVACY_NOTICE} target="_blank">
                Privacy Policy
              </a>
              <span> | </span>
              <a className="terms" href={Service_Agreement} target="_blank">
                Service Agreement
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
