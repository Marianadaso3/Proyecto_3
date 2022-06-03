/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../css/proyectos.css';

function Proyectos() {
  return (
    <div data-testid="test-proyects" id="proyectos" className="secciones">
      <div className="titulos">
        <div className="icono">
          <i className="fa-solid fa-briefcase fa-2x" />
        </div>
        <div className="">
          <p className="texto-titulo">
            -MIS
            <span className="mi"> PROYECTOS</span>
            -
          </p>
        </div>

      </div>

      <section className="galeria">
        <a href="http://54.161.148.179:3002/" className="referencia">
          <iframe src="http://54.161.148.179:3002/" />
        </a>

        <a href="http://54.161.148.179:3008/" className="referencia">
          <iframe src="http://54.161.148.179:3008/" />
        </a>

        <a data-testid="test-url" href="http://54.161.148.179:3010/" className="referencia">
          <iframe src="http://54.161.148.179:3010/" />
        </a>

        <a href="http://54.161.148.179:3011/" className="referencia">
          <iframe src="http://54.161.148.179:3011/" />
        </a>

        <a href="http://54.161.148.179:3000/" className="referencia">
          <iframe src="http://54.161.148.179:3000/" />
        </a>

        <a href="http://54.161.148.179:3001/" className="referencia">
          <iframe src="http://54.161.148.179:3001/" />
        </a>

      </section>

      <article className="light-box" data-testid="test-images" id="image1">
        <a href="#image6" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/calculadora.png" alt="proyecto" />
        <a href="#image2" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

      <article className="light-box" data-testid="test-images2" id="image2">
        <a href="#image1" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/copia.png" alt="proyecto" />
        <a href="#image3" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

      <article className="light-box" id="image3">
        <a href="#image2" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/memoria.png" alt="proyecto" />
        <a href="#image4" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

      <article className="light-box" id="image4">
        <a href="#image3" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/pagina de animaciones.png" alt="proyecto" />
        <a href="#image5" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

      <article className="light-box" id="image5">
        <a href="#image4" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/pagina de enlaces.png" alt="proyecto" />
        <a href="#image6" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

      <article className="light-box" id="image6">
        <a href="#image5" className="next"><i className="fas fa-arrow-left fa-2x" /></a>
        <img src="img/proyectos/storybook.png" alt="proyecto" />
        <a href="#image1" className="next"><i className="fas fa-arrow-right fa-2x" /></a>
        <a href="#proyectos" className="close">x</a>
      </article>

    </div>

  );
}

export default Proyectos;
