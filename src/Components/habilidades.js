/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import '../css/habilidades.css';

function Habilidades() {
  const [porcentaje] = useState({
    creatividad: '90%',
    liderazgo: '70%',
    interpersonal: '90%',
    equipo: '80%',
    ingles: '85%',
    profesionalismo: '95%',
  });
  useEffect(() => {
    const verificador = (entries) => {
      if (entries[0]) {
        let numero1 = 0;
        let numero2 = 0;
        let numero3 = 0;

        const Porcentajes1 = setInterval(() => {
          numero1 += 5;

          document.querySelector('.html').textContent = String(numero1);

          if (numero1 === 85) {
            clearInterval(Porcentajes1);
          }
        }, 100);

        const Porcentajes2 = setInterval(() => {
          numero2 += 5;

          document.querySelector('.css').textContent = String(numero2);

          if (numero2 === 80) {
            clearInterval(Porcentajes2);
          }
        }, 100);

        const Porcentajes3 = setInterval(() => {
          numero3 += 5;

          document.querySelector('.js').textContent = String(numero3);

          if (numero3 === 90) {
            clearInterval(Porcentajes3);
          }
        }, 100);
      }
    };

    const observer = new IntersectionObserver(verificador, { rootMargin: '-30% 0px -70% 0px' });
    const habilidades = document.querySelector('#habilidades');

    observer.observe(habilidades);
  }, {});

  return (
    <div id="habilidades" className="secciones">
      <div className="fondo-habilidades">

        <div className="container">
          <div className="titulos">
            <div className="icono">
              <i className="fa-solid fa-chart-simple fa-2x" />
            </div>
            <div className="">
              <p className="texto-titulo">
                -MIS
                {' '}
                <span className="mi">HABILIDADES</span>
                -
              </p>
            </div>

          </div>

          <div className="informacion">
            <div className="porcentaje">
              <div className="cont row">
                <div className="card col-lg-4">
                  <div className="box col-lg-4">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="html">80</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">Html</h3>
                    </div>
                  </div>
                </div>

                <div className="card col-lg-4">
                  <div className="box">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="css">80</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">Css</h3>
                    </div>
                  </div>
                </div>

                <div className="card col-lg-4">
                  <div className="box">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="js">90</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">javascript</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-habilidad">
                <div className="habilidad">
                  <p className="porcentaje-barra a" style={{ width: porcentaje.creatividad }}>Creatividad 90%</p>
                </div>
                <div className="habilidad">
                  <p className="porcentaje-barra b" style={{ width: porcentaje.liderazgo }}>Liderazgo 70%</p>
                </div>
                <div className="habilidad">
                  <p className="porcentaje-barra c" style={{ width: porcentaje.interpersonal }}>Comunicacion Interpersonal 90%</p>
                </div>

              </div>

              <div className="col-lg-6 col-habilidad">
                <div className="habilidad">
                  <p className="porcentaje-barra d" style={{ width: porcentaje.equipo }}>Trabajo en Equipo 80%</p>
                </div>
                <div className="habilidad">
                  <p className="porcentaje-barra e" style={{ width: porcentaje.ingles }}>Ingles 85%</p>
                </div>
                <div className="habilidad">
                  <p className="porcentaje-barra f" style={{ width: porcentaje.profesionalismo }}>Profesionalismo 95%</p>
                </div>

              </div>
            </div>

          </div>

        </div>
        <div className="contratar">
          <p className="texto-contratar">Estoy Disponible para Trabajar</p>
          <div className="botones-contratar">
            <a href="#contacto" className="realizar-propuesta">Realizar Propuesta</a>
            <a href="documentos/CVS.pdf" className="descargar-curriculum bg-primary" download="CVS.pdf">Descargar curriculum (.PDF)</a>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Habilidades;
