import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Navbar.css'
function Carousel(){
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
      <div class="col">
        <h1>Find Leading Experts for your Business</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div class="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" class="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    <div class="carousel-item ">
      <div class="row">
      <div class="col">
        <h1>Second slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div class="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" class="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    <div class="carousel-item active">
      <div class="row center">
      <div class="col ">
      <h1>Find Leading Expert for your Business</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div class="col"><img src="https://static.startuptalky.com/2021/10/Top-Consultancy-Business-Ideas_startuptalky.jpg" class="d-block w-100" alt="..."/>
      </div>
      </div>
    </div>
    
  </div>
</div>
    );
}

export default Carousel;