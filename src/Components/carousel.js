/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import { left } from '@popperjs/core';
import React from 'react';
import '../css/carousel.css';

function Carousel() {
  return (

    <div id="contenedor-carousel" className="secciones">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/bg1.webp" className="d-block w-100" alt="bg1" />
          </div>
          <div className="carousel-item">
            <img src="./img/home-bg-slideshow2.webp" className="d-block w-100" alt="bg2" />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <div className="frases">
          <p className="texto">BIENVENIDO A MI SITIO</p>
          <a className="redireccion" href="#proyectos">VER PROYECTOS</a>
        </div>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>

  );
}

export default Carousel;
