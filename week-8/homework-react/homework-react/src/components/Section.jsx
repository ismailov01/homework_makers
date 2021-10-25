import React from 'react';
import {Carousel, img} from 'react-bootstrap';

const Section = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="https://yt3.ggpht.com/a/AATXAJyKf703GsrCJDcMmAjLpwKtJf7gk049tj5n8w=s900-c-k-c0xffffffff-no-rj-mo"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="https://yt3.ggpht.com/a/AATXAJyKf703GsrCJDcMmAjLpwKtJf7gk049tj5n8w=s900-c-k-c0xffffffff-no-rj-mo"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="https://yt3.ggpht.com/a/AATXAJyKf703GsrCJDcMmAjLpwKtJf7gk049tj5n8w=s900-c-k-c0xffffffff-no-rj-mo"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Section;