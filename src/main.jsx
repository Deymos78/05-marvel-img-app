import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { MarvelApiApp } from './MarvelApiApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarvelApiApp />
  </React.StrictMode>,
)
