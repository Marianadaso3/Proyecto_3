/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import { left } from '@popperjs/core';
import React, { useState, useEffect } from 'react';
import '../css/nav.css';

function Nav() {
  const [ubicacion, enviarPosicion] = useState('navbar navbar-expand-lg fixed-top custom-nav navbar-dark');

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 50) {
        enviarPosicion('navbar navbar-expand-lg fixed-top custom-nav navbar-dark movido');
      } else {
        enviarPosicion('navbar navbar-expand-lg fixed-top custom-nav navbar-dark');
      }
    });

    const secciones = document.querySelectorAll('.secciones');

    const verificador = (entries) => {
      entries.forEach((entri) => {
        if (entri.isIntersecting) {
          document.querySelector('.navbar-nav a.active').classList.remove('active');

          const id = entri.target.getAttribute('id');

          const link = document.querySelector(`.navbar-nav a[href="#${id}"]`);

          link.classList.add('active');
        }
      });
    };

    // const observer = new IntersectionObserver(verificador, { rootMargin: '-50% 0px -50% 0px' });

    // secciones.forEach((seccion) => {
    // observer.observe(seccion);
    // });
  }, []);

  return (
    <nav className={ubicacion}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontSize: '40px', fontWeight: '700' }}>Mariana</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" data-testid="test-nav" id="navbarNavDropdown">
          <ul className="navbar-nav" style={{ margin: '0 0 0 auto' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contenedor-carousel">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi">Sobre Mariana</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
