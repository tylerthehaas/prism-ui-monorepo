import React from 'react';
import ReactDOM from 'react-dom';

import Docs from './docs';

import 'prismjs/themes/prism-tomorrow.css';
import './docs.scss';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('react-target');
  ReactDOM.render(<Docs />, target);
});
