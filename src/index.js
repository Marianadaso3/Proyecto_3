// Importaciones
import React from 'react';
import ReactDom from 'react-dom';
import StartApp from './StartApp';
import './index.css';
import Footer from './Components/footer';

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  <StartApp />,
  document.getElementById('root'),
);

ReactDom.render(
  <Footer />,
  document.getElementById('footer'),
);
