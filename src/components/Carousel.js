import React from 'react';
import ReactDOM from 'react-dom';

function Carousel(){
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images8.alphacoders.com/470/thumb-1920-470318.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images8.alphacoders.com/470/thumb-1920-470318.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images8.alphacoders.com/470/thumb-1920-470318.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    );
}

export default Carousel;