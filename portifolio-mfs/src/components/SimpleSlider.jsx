import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,  // Adicionando rolagem automática
      autoplaySpeed: 3000,  // Defina o intervalo de tempo em milissegundos (opcional)
    };

    return (
      <div>
        <Slider className="carrossel" {...settings}>
          <div className="sliderCarrossel">
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>REACT.js</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>NEXT.js</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>MYSQL</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>FIREBASE</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>GIT</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>GITHUB</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
