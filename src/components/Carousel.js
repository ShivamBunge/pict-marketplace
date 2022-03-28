import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Navbar.css'
function Carousel(){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
      <div className="col">
        <h1>Find Leading Experts for your Business</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div className="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" className="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="row">
      <div className="col">
        <h1>Second slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div className="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" className="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    <div className="carousel-item active">
      <div className="row center">
      <div className="col ">
      <h1>Find Leading Expert for your Business</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div className="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" className="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    
  </div>
</div>
    );
}

export default Carousel;