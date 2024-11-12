import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from '@gravity-ui/uikit'

import './styles/index.less';
import App from './Copmonents/App.jsx';

const rootElement = document.querySelector('.root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme="light">
      <App />
    </ThemeProvider>
  </StrictMode>
);
