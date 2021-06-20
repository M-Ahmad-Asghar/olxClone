import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./Crousel.css"
export default function CrouselComponent() {
  
    return (
      <Carousel id="crsl">
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="/Assets/images/demo1.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/images/banner.png"
            alt="Second slide"
          />
  
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/images/banner.png"
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
    );
  }