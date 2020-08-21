import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ width, showStatus, showThumbs, showArrows, showIndicators, autoPlay, interval, infiniteLoop, statusFormatter, children }) => {
  return (
    <div className="box__slider">
      <Carousel
        width={width}
        showStatus={showStatus}
        showThumbs={showThumbs}
        showArrows={showArrows}
        showIndicators={showIndicators}
        autoPlay={autoPlay}
        interval={interval}
        infiniteLoop={infiniteLoop}
        statusFormatter={statusFormatter}>
        {children}
      </Carousel>
    </div>
  );
}

export default Slider;