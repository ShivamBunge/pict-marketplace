import React from "react";
import Instagram from './../../../Assets/Instagram.svg'
import LinkedIn from './../../../Assets/linkedin.svg'
import Mail from './../../../Assets/Mail.svg'
import Twitter from './../../../Assets/twitter.svg'
import Youtube from './../../../Assets/youtube.svg'
import "./footer.css";

const Footer = () => {
 
  return <div className="footer-area position-absolute bottom-0 w-100 bg-black d-flex  align-content-center p-4" id='#footer'>

  <div className='align-self-center text-white w-25'>&#169;2022 Brahmastra</div>
  <div className="logo-social d-flex justify-content-around  mx-auto w-25" target="blank" href=""  >
      <a className="logo-social" target="blank" href="">
          <img src={Instagram} alt="IG" className='img-fluid' />
      </a>

      <a
          className="logo-special"
          target="blank"
          href="#"
      >
          <img src={LinkedIn} alt="LinkedIn" className='img-fluid' />

      </a>

      <a
          className="logo-special"
          target="blank"
          href=" "
      >
          <img src={Mail} alt="Gmail" className='img-fluid' />

      </a>

      <a
          className="logo-special"
          target="blank"
          href=" "
      >
          <img src={Twitter} alt="Twitter" className='img-fluid' />

      </a>

      <a
          className="logo-special"
          target="blank"
          href=" "
      >
          <img src={Youtube} alt="Youtube" className='img-fluid' />

      </a>


  </div>
  <div className='text-white w-25 align-self-center'>Privacy policy | Terms & conditions</div>


</div>

}

export default Footer;