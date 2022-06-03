/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../css/sobre mi.css';

function SobreMi() {
  return (
    <div id="sobre-mi" className="container secciones">
      <div className="titulos">
        <div className="icono">
          <i className="fa-solid fa-user fa-2x" />
        </div>
        <div className="">
          <p className="texto-titulo">
            -SOBRE
            <span className="mi">MI</span>
            -
          </p>
        </div>

      </div>

      <div className="row informacion">
        <div className="col-lg-4 foto">
          <img src="img/perfil.jpeg" alt="perfil" />
          <div className="sobre">
            <p className="nombre">Mariana David Sosa</p>
            <p className="puesto">Programador</p>
          </div>
        </div>

        <div className="col-lg-4">
          <p className="sub">Creativa, persitente y responsable.</p>
          <p className="texto-largo">Lideré con los originarios de la Fundación Rosas Botrán, donde se realizó una exposición artística en la que fui parte de ella, además, formé parte de un proyecto tecnológico donde se creó una página web para alcanzar el objetivo de un aprendizaje interactivo y motivacional.</p>
          <p className="texto-largo">Pertenecí al consejo estudiantil del Centro Escolar Campoalegre donde experimenté conocimientos administrativos, inteligencia emocional, entre otros.</p>
        </div>
        <div className="col-lg-4">
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-solid fa-cake-candles" />
              {' '}
              fecha de nacimiento:
            </span>
            {' '}
            27/01/2001
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-solid fa-phone" />
              {' '}
              telefono:
            </span>
            {' '}
            +502 30110780
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-solid fa-envelope" />
              {' '}
              correo electronico:
            </span>
            {' '}
            natydaso3@hotmail.com
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-brands fa-linkedin" />
              {' '}
              linkedin:
            </span>
            {' '}
            https://www.linkedin.com/feed/
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              <i className="fa-brands fa-github" />
              {' '}
              github:
            </span>
            {' '}
            https://github.com/
          </p>
        </div>

      </div>

    </div>

  );
}

export default SobreMi;
