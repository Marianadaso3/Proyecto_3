/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Nav from '../Components/nav';
import Proyectos from '../Components/proyectos';
import Contacto from '../Components/contacto';
import '@testing-library/jest-dom';

describe('test en el funcionamiento del portafolio', () => {
  test('La opcion sobre mi funciona bien', () => {
    // const dom = render(<Nav />);
    // Buscar elemento en el DOM
    render(<Nav />);

    const testElement = screen.getByTestId('test-nav');
    expect(testElement).toBeInTheDocument();
  });
  test('La opcion de navegacion funciona bien', () => {
    render(<Proyectos />);

    const testElement2 = screen.getByTestId('test-proyects');
    expect(testElement2).toBeInTheDocument();
  });
  test('La opcion contactos funciona bien', () => {
    render(<Contacto />);

    const testElement3 = screen.getByTestId('test-contacts');
    expect(testElement3).toBeInTheDocument();
  });
  test('Las imagen 1 de proyectos funciona bien', () => {
    render(<Proyectos />);

    const testElement2 = screen.getByTestId('test-images');
    expect(testElement2).toBeInTheDocument();
  });
  test('Las imagen 2 de proyectos funciona bien', () => {
    render(<Proyectos />);

    const testElement2 = screen.getByTestId('test-images2');
    expect(testElement2).toBeInTheDocument();
  });
  test('El URL del proyecto tres funciona adecuadamente', () => {
    render(<Proyectos />);

    const testElement2 = screen.getByTestId('test-url');
    expect(testElement2).toBeInTheDocument('referencia');
  });
  test('El link de github funciona adecuadamente', () => {
    render(<Contacto />);

    const testElement3 = screen.getByTestId('test-github');
    expect(testElement3).toBeInTheDocument();
  });
  test('El link de linked funciona adecuadamente', () => {
    render(<Contacto />);

    const testElement3 = screen.getByTestId('test-linked');
    // expect(testElement3).toBe('string');
    expect(testElement3).toBeInTheDocument('https://www.linkedin.com/feed/');
  });
  test('El link de correo funciona adecuadamente', () => {
    render(<Contacto />);

    const testElement3 = screen.getByTestId('test-mail');
    expect(testElement3).toBeInTheDocument('mailto:natydaso3@hotmail.com');
  });
  test('La opcion de formulario funciona adecuadamente', () => {
    render(<Contacto />);

    const testElement3 = screen.getByTestId('test-formulario');
    expect(testElement3).toBeInTheDocument('formulario');
  });
});

afterEach(cleanup);
